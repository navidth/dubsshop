"use server";
import { z } from "zod";
import { FormDataSchemaLogin, FormDataShemaRegister } from "../shema";
import { User } from "../models/userModels";
import bcrypt from "bcrypt";


type Inputs = z.infer<typeof FormDataSchemaLogin>;
type InputsRegister = z.infer<typeof FormDataShemaRegister>;

export async function addEntry(data: Inputs) {

  const resualt = FormDataSchemaLogin.safeParse(data);
  if (resualt.success) {
    var user = await User.findOne({ phone_number: data.phone });

    if (!user) {
      return {
        success: false,
        data: "اطلاعات وارد شده صحیح نمیباشد",
      };
    }
    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      return { success: false, data: "اطلاعات وارد شده صحیح نمیباشد" };
    }
    if(user && isValid) {
    }
    return { success: true, data: user};
  }

  if (resualt.error) {
    return { success: false, data: resualt.error.format() };
  }
}

export async function addEntryRegister(data: InputsRegister) {
  const resualt = FormDataShemaRegister.safeParse(data);
  if (resualt.success) {
    var user = await User.findOne({ phone_number: data.phoneUsers });
    if (user) {
      return { success: false, data: "این شماره تلفن قبلا ثبت شده است" };
    }
    const { nameUser, phoneUsers, password } = resualt.data;
    createUser(nameUser, phoneUsers, password);
    return { success: true, data: " با موفقیت انجام شد" };
  }
}

async function createUser(name: String, phone: String, password: any) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = new User({
    nameUser: name,
    phone_number: phone,
    password: hashPassword,
  });
  const resualt = await user.save();
  return { success: true, data: user };
}

// export async function isLoggedIn(userId: string) {
//   try {
//     const user = await User.findById(userId);
//     return user ? true : false;
//   } catch (error) {
//     return false;
//   }
// }
