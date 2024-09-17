//
//
//
import Logo from "../icons/logo";
import LineTop from "../icons/lineTop";
import LineBottom from "../icons/lineBottom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



const Welcome = () => {
  const { t } = useTranslation();
  return (
    <article className="relative flex h-screen overflow-hidden bg-welcome">
      <div className="absolute top-0 block w-full pointer-events-none md:hidden">
        <LineTop className={"w-full h-[700px]"} />
      </div>
      <img
        src="./images/welcome.png"
        alt="welcome"
        className="absolute w-full h-full opacity-20"
      />
      <div className="z-10 m-auto text-white font-Raleway">
        <div className="mx-auto w-fit">
          <Logo className={"w-[180px] h-[180px] md:w-[250px] md:h-[250px]"} />
        </div>
        <h1 className="text-[35px] md:text-[50px]  text-center mx-auto">
          {t("welcome")}
          <span className="font-black"> {t("layers")}</span>
        </h1>
        <p className="text-[15px] w-[250px] md:text-[24px] leading-[20px] font-light md:leading-[34px] md:w-[400px] text-center mx-auto">
          {t("unwind")}
        </p>
        <Link to={"/phoneVerification"}>
          <button className=" hover:bg-[#ffffff40] active:bg-[#ffffff29] capitalize w-[250px] py-3 rounded-[15px] text-[18px] md:w-[400px] md:py-6 md:rounded-[25px] mx-auto my-6 block bg-[#ffffff29] text-white font-bold md:text-[20px]">
            {t("start")}
          </button>
        </Link>
      </div>
      <div className="absolute w-full bottom-[-120px] pointer-events-none md:hidden block">
        <LineBottom className={"w-full h-[700px]"} />
      </div>
    </article>
  );
};

export default Welcome;
