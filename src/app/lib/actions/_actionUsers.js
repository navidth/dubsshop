"use server";
const { FormDataSchemaLogin, FormDataShemaRegister } = require("../shema");
const { User } = require("../models/userModels");
const bcrypt = require("bcrypt");


export async function addEntry(data) {
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
    if (user && isValid) {
    }
    return { success: true, data: user };
  }

  if (resualt.error) {
    return { success: false, data: resualt.error.format() };
  }
}

export async function addEntryRegister(data) {
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

async function createUser(name, phone, password) {
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
