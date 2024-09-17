//
//
//
import { useCallback, useRef, useState } from "react";
import CrossIcon from "../../icons/crossicon";
import Webcam from "react-webcam";
import TrashBinIcon from "../../icons/trashBinIcon";
import CameraCaptureIcon from "../../icons/cameraCaptureIcon";
import AirPlaneIcon from "../../icons/airPlaneIcon";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Camera() {
  const { t } = useTranslation();
  const [picture, setPicture] = useState("");
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  }, [webcamRef]);

  const handleClose = (
  ) => {
    navigate("/home");
  };

  const handleDelete = () => {
      setPicture("");
  };
  const handleSendToGallery = () => {
    const now = new Date();
    const dateString = now.toISOString().replace(/:/g, "-");
    const link = document.createElement("a");
    link.href = picture;
    link.download = `image-${dateString}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setPicture("");
  };

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
      <span
        className="absolute top-8 left-8 rtl:left-auto rtl:right-8 rounded-full bg-[#7e7770] flex items-center justify-center cursor-pointer z-50 size-[60px]"
        onClick={handleClose}
      >
        <CrossIcon className={"size-[40px]"} />
      </span>

      {!picture ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="object-cover w-full h-full "
          />
          <button
            className="bg-mainActive rounded-full size-[80px] md:size-[130px] border-2 border-white flex items-center justify-center absolute bottom-10 left-1/2  -translate-x-1/2"
            type="button"
            onClick={capture}
          >
            <CameraCaptureIcon className="size-[50px] md:size-[65px]" />
          </button>
        </>
      ) : (
        <div className="w-full h-full">
          <img
            src={picture}
            alt="Captured"
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute bottom-0 flex items-center justify-between w-full p-3 -translate-x-1/2 rounded-bl-none rounded-br-none rounded-3xl bg-offWhite left-1/2">
            <button
              type="button"
              onClick={handleDelete}
              className="w-1/2 rounded-2xl hover:bg-secondary hover:font-bold group py-4"
            >
              <TrashBinIcon className="size-[34px] md:size-[44px] mx-auto group-hover:*:stroke-black" />
              {t("delete")}
            </button>
            <button
              type="button"
              className="w-1/2 rounded-2xl hover:bg-secondary hover:font-bold group py-4"
              onClick={handleSendToGallery}
            >
              <AirPlaneIcon className="size-[34px] md:size-[44px] mx-auto group-hover:*:*:stroke-black" />
              {t("send")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
