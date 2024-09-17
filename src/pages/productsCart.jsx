//
//
//

import React from 'react'
import { Link } from 'react-router-dom';



export default function Cart() {
    return (
      <section className="font-Raleway py-10">
        <div className="flex items-center justify-center">
          <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] space-y-10">
            <div className="w-full">
              <img
                src="./images/empty.png"
                alt="empty-cart"
                className="w-full"
              />
            </div>
            <div className="">
              <h3 className="text-center text-[30px] md:text-[38px] lg:text-[44px] font-bold">
                Your Cart Is Empty
              </h3>
              <p className="text-center text-[16px] md:text-[18px] lg:text-[22px] text-main">
                It looks like you haven't added any services to your cart yet.
                Start exploring our services now!
              </p>
                <p className="mt-8 text-center font-semibold text-[18px] md:text-[20px] lg:text-[24px] uppercase bg-main text-white py-2 w-full rounded-2xl">
              <Link to={"/home"}>
                  Explore services
              </Link>
                </p>
            </div>
          </div>
        </div>
      </section>
    );
}

