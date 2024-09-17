//
//
import { useEffect } from "react";
import AddIcon from "../../icons/addIcon";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../redux/productsSlice";

export default function Shop() {
  let dispatch = useDispatch();
  //
  let data = useSelector((state) => state?.products?.products?.data?.data);
  console.log(data);

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  return (
    <>
      {data &&
        data?.map((item, i) => (
          <div key={i} className="relative font-mono">
            <AddIcon
              className={
                "absolute top-[24.5px] rtl:!right-auto rtl:left-[20px] right-[20px] z-10 w-[50px] sm:w-[60px] md:cursor-pointer"
              }
            />
            <div className="bg-slate-200 w-full rounded-3xl">
            <img
              className="h-[250px] sm:h-[270px] object-cover w-full object-center rounded-3xl"
              src={item.image}
              alt={item.name}
            />
            </div>
            <div className="my-4">
              <div className="flex items-center gap-1">
                <span className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(item.rate)
                          ? "text-[#FD7E14]"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.371 2.449a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.371-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.784 9.377c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                  ))}
                </span>
                <span className=" font-Inter text-reviewText text-[15px]">
                  {item.rate} ({item.view} review)
                </span>
              </div>
              <h3 className="text-[18px] font-semibold font-Raleway">
                {item?.descriptions[0]?.name || "No Name"}
              </h3>
              <p className="text-[15px] font-semibold font-Inter flex items-center gap-2">
                SAR {item.customer_price}
                {item.discount && (
                  <del className="font-normal text-discountText">
                    SAR {item.discount}
                  </del>
                )}
              </p>
            </div>
          </div>
      ))}
    </>
  );
}
