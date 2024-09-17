//
//
//
import Logo from "../icons/logo";
import PhoneIcon from "../icons/phoneIcon";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoginData } from "../redux/authSlice";

const PhoneVerification = () => {
  let dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  //
  let data = useSelector((state) => state?.auth?.user?.data);
  console.log(data);
  
  const phoneRegExpEgypt = /\+201[0125][0-9]{8}$/;
  const phoneRegExpSaudi = /\+9665[0-9]{6}$/;
  
  const validationForm = yup.object({
    country: yup.string().required(`${t("Country is required")}`),
    phone: yup
      .string()
      .required(`${t("Number is required")}`)
      .test(
        `${t("valid-phone")}`,
        `${t("Number is not valid")}`,
        function (value) {
          const { country } = this.parent;
          if (country === "EGY") {
            return phoneRegExpEgypt.test(value);
          } else if (country === "KSA") {
            return phoneRegExpSaudi.test(value);
          }
          return false;
        }
      ),
  });
  
  const formik = useFormik({
    initialValues: {
      country: "EGY",
      phone: "",
      password: "allaa_vodo_1",
    },
    onSubmit: (values, { resetForm }) => {
      if (formik.isValid ) {
        navigate("/codeVerification");
        //  login verification data
        dispatch(getLoginData(values));
        //
        resetForm();
      } else {
        console.log("Invalid form");
      }
    },
    validationSchema: validationForm,
  });
  
  const handleFieldChange = (e) => {
    formik.handleChange(e);
  };
  return (
    <article className="h-screen pt-20 bg-verification font-Raleway">
      <div>
        <div className="mx-auto w-fit">
          <Logo className={"w-[250px] h-[250px] md:h-[350px] md:w-[350px]"} />
        </div>
        <div className="w-[320px] md:w-[700px] mx-auto">
          <h1 className="text-center text-textBold text-[38px] md:text-[76px] font-medium">
            {t("phoneV")}
          </h1>
          <form className="" onSubmit={formik.handleSubmit}>
            <div className="flex items-center border border-[#E5E5E5] px-4 gap-2.5 mt-4 rounded-2xl">
              <PhoneIcon className="w-6 h-6" />
              <div>
                <select
                  name="country"
                  className="block w-full p-2 focus:outline-none"
                  onChange={handleFieldChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country }
                >
                  <option value="EGY">EGY</option>
                  <option value="KSA">KSA</option>
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-500">{formik.errors.country}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  aria-autocomplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder={
                    formik.values.country === "EGY"
                      ? "EGY +201012345678"
                      : "KSA +966501234567"
                  }
                  className="block w-full border-none focus:outline-none rounded-md p-2"
                />
              </div>
            </div>
            {formik.errors.phone && formik.touched.phone ? (
              <span className="text-red-500 text-sm">
                * {formik.errors.phone}
              </span>
            ) : null}
            <button
              type="submit"
              className="block w-full py-4 my-4 font-bold text-white rounded-2xl mainButton"
            >
              {t("verify")}
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default PhoneVerification;

