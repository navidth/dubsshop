"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormDataSchemaLogin } from "@/app/lib/shema";
import { addEntry } from "@/app/lib/actions/_actionUsers";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { sessions } from "@/utils/isLoginIn";
import { useEffect } from "react";
type Inputs = z.infer<typeof FormDataSchemaLogin>;

function Register() {
  const router = useRouter();
  useEffect(() => {
    if (sessions) {
      router.push("/");
    }
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchemaLogin),
  });

  // Login.............................................
  const processForm: SubmitHandler<Inputs> = async (data: Inputs) => {
    const resualt = await addEntry(data);
    if (resualt?.success) {
      toast.success("ورود با موفقیت انجام شد ", {
        position: "top-right",
      });
      localStorage.setItem("session", JSON.stringify(resualt.success));
      window.location.reload();
      return;
    }
    toast.error(resualt?.data, {
      position: "top-right",
    });
    reset();
  };

  return (
    <div className="login-page  mx-auto pt-2 pb-3">
      <div className=" my-5 form-page">
        <div className="rounded-4 form-page-div1">
          <div className="form-content mt-5">
            <div
              className="login-content border shadow border-danger-subtile bg-white"
              id="login-content"
            >
              <div className="header-form">
                <div
                  id="login"
                  className="p-3 w-100 d-flex justify-content-center"
                  style={{
                    background: "#dc3545",
                    color: "#f8f9fa",
                  }}
                >
                  <h3 className="fs-3 ">ورود</h3>
                </div>
              </div>
              <form onSubmit={handleSubmit(processForm)} className="my-4 mx-3">
                <label htmlFor="phone" className="form-label mt-3">
                  شماره تلفن :
                </label>
                <input
                  type="text"
                  className="form-control mx-2 my-0"
                  placeholder="شماره تلفن خود را وارد کنید ..."
                  {...register("phone")}
                />
                <br />
                {errors.phone?.message && (
                  <li className="text-danger errorsMessage mx-2">
                    {errors.phone?.message}
                  </li>
                )}
                <label htmlFor="password" className="form-label mt-3">
                  رمز عبور :
                </label>
                <input
                  type="password"
                  className="form-control mx-2 my-0"
                  placeholder="رمز عبور خود را وارد کنید ..."
                  {...register("password")}
                />
                <br />
                {errors.password?.message && (
                  <li className="text-danger errorsMessage mx-2">
                    {errors.password?.message}
                  </li>
                )}
                <button
                  type="submit"
                  className=" mt-2 mx-auto btn rounded-2 btn-danger  py-2 p-4"
                >
                  ورود
                </button>
              </form>
              <ToastContainer />
            </div>
            <div className="register text-white  d-flex flex-column align-items-center justify-content-center">
              <div className="headerRegister my-4">
                <h2>عضویت در سایت </h2>
              </div>
              <div className="text-light text-center w-75">
                <p>
                  {" "}
                  با ایجاد یک حساب کاربری میتوانید سریع تر بررسی کنید، خرید
                  کنید، سفارش هارا بررسی و پیگیری کنید و موارد دیگر
                </p>
                <button
                  className="btn mt-3 fw-bold py-2 p-4 btn-outline-light mb-3 shadow"
                  onClick={() => router.push("/register")}
                >
                  ساخت اکانت جدید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
