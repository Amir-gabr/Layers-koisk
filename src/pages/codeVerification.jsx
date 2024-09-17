//
//
//

import * as yup from "yup";
import Logo from "../icons/logo";
import { useFormik } from "formik";
import BackIcon from "../icons/backIcon";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getLoginData } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/inputOtp";
const CodeVerification = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(60);
  const { t } = useTranslation();
  const navigate = useNavigate();
    //
  const phone = useSelector((state) => state?.auth?.user?.data?.phone);
  console.log(phone);
  useEffect(() => {
      dispatch(getLoginData());
  }, [dispatch])
  
  const maskPhone = (phone) => {
    if (phone && phone.length >= 10) {
      const firstPart = phone.slice(0, 5);
      const lastPart = phone.slice(-2);
      return `${firstPart}*****${lastPart}`;
    }
    return phone;
  };

  const validationSchema = yup.object({
    otp: yup.string().required(t("OTPErr")).length(4, t("OTPErr")), // التأكد من أن OTP يتكون من 4 أرقام
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema,
    onSubmit: (values) => {
      //
      alert("OTP is " + values.otp);
      navigate("/home");
    },
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <article className="relative h-screen bg-verification font-Raleway">
      <Link to={"/phoneVerification"}>
        <div className="absolute top-[78px] p-2.5 rounded-[18px] md:p-5 md:rounded-[30px] left-4 rtl:left-auto rtl:right-4 cursor-pointer bg-[#0000001A] hover:bg-[#00000021]">
          <BackIcon
            className={
              "w-[30px] h-[30px] md:w-[50px] md:h-[50px] rtl:rotate-180"
            }
          />
        </div>
      </Link>
      <div className="mx-auto w-fit">
        <Logo className="w-[120px] h-[200px] md:w-[200px]" />
      </div>
      <div className="w-[320px] md:w-[700px] mx-auto">
        <h1 className="text-center text-textBold text-[38px] md:text-[76px] font-medium">
          {t("phoneV")}
        </h1>
        <p className="text-center text-[18px] md:text-[35px]">
          {t("codeSent")} :
        </p>
        <span className="block w-full text-center text-main text-[20px] md:text-[30px]">
          {maskPhone(phone)}
        </span>

        <form onSubmit={formik.handleSubmit}>
          <InputOTP
            maxLength={4}
            containerClassName="justify-center my-4 w-fit mx-auto"
            onChange={(value) => formik.setFieldValue("otp", value)}
            dit="ltr"
          >
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="p-[35px_30px] md:p-[40px_35px]"
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot
                index={1}
                className="p-[35px_30px] md:p-[40px_35px]"
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot
                index={2}
                className="p-[35px_30px] md:p-[40px_35px]"
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot
                index={3}
                className="p-[35px_30px] md:p-[40px_35px]"
              />
            </InputOTPGroup>
          </InputOTP>

          {formik.errors.otp && formik.touched.otp ? (
            <div className="text-red-500">{formik.errors.otp}</div>
          ) : null}

          <button
            type="submit"
            className="w-full py-4 my-4 font-bold text-white mainButton rounded-2xl"
          >
            {t("confirm")}
          </button>
        </form>

        <div className="flex items-center justify-center gap-1 md:text-[25px]">
          <p className="font-medium"> {t("noCode")}</p>
          <button className="font-semibold text-main hover:text-mainHover">
            {t("resendCode")} ({formatTime(timeLeft)})
          </button>
        </div>
      </div>
    </article>
  );
};

export default CodeVerification;
