import CartIcon from "../icons/cartIcon";
import Logo from "../icons/logo";
import Select from "./select";
import { useOptions } from "../hooks/useOptions";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const enFlag = "../images/en.png";
const arFlag = "../images/ar.png";
const Header = () => {
  const { t } = useTranslation();
  const { languageOptions } = useOptions();
  const [lang, setLang] = useState("");
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    setLang(i18n.language);
  }, [lang]);
  const onLangChange = (value) => {
    setLang(value);
  };

  return (
    <header className="py-5 px-6 md:px-12">
      <section className="flex items-center justify-between">
        <NavLink to="/home">
          <Logo
            fill={"black"}
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
          />
        </NavLink>
        <div className="flex items-center gap-[15px]">
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return `bg-secondary
                  ${
                    isActive ? "bg-secondary px-4 py-2 rounded-3xl" : "bg-white"
                  }
                  `;
            }}
          >
            <div>
              <CartIcon className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]" />
              <p className="py-1 text-center ">{t("cart")}</p>
            </div>
          </NavLink>
          <hr className="border h-[30px] rounded-full" />
          <label htmlFor="language">
            <img
              className="size-[40px] md:size-[60px] rounded-full object-cover bg-center mb-2 mx-auto"
              src={lang === "en-US" ? enFlag : arFlag}
              alt="flag"
            />
            <Select
              items={languageOptions}
              onChange={(e) => onLangChange(e)}
              placeholder={lang === "en-US" ? "EN" : "AR"}
              className={"border-none"}
              id="language"
            />
          </label>
        </div>
      </section>
    </header>
  );
};

export default Header;
