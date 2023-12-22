import React from "react";
import Image from "next/image";
import LogoPink from "@/assets/logo/logo-pink.svg";
import FooterHouse from "@/assets/footer/footer-house.svg";
import Wishes from "@/components/FooterSection/Wishes";

const FooterSection = (props) => {
  return (
    <div className="relative bg-carouselPink">
      <div className="absolute left-0 bottom-20 lg:bottom-16 opacity-[0.07]">
        <Image
          src={FooterHouse}
          alt="Footer House"
          priority={true}
          className="w-[256px] lg:w-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <div className="pt-10 mb-14">
          <Image
            src={LogoPink}
            alt="Logo Pink"
            priority={true}
            className="w-[74px] lg:w-auto h-[74px] lg:h-auto"
          />
        </div>
        <div className="mb-14 font-niconne text-[28px] lg:text-[40px] text-darkPink text-center">
          We would be honored by your presence at our wedding
        </div>
        <Wishes />
        <div className="my-14 font-niconne text-[22px] lg:text-[28px] text-darkPink text-center">
          Thank You
        </div>
      </div>
      <div className="bg-darkPink p-6 z-10 flex items-center justify-between px-6 lg:px-32">
        <div className="text-white">
          Copyright © 2023. All rights reserved. Made with ❤️ by{" "}
          <a
            href="https://matheswaaran.com"
            target="_blank"
            className="underline"
          >
            Mat
          </a>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <a href="mailto:snarenbtechit@gmail.com">
            <div className="bg-white rounded-full p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.00293 5.884L9.99993 9.882L17.9969 5.884C17.9673 5.37444 17.744 4.89549 17.3728 4.54523C17.0015 4.19497 16.5103 3.99991 15.9999 4H3.99993C3.48951 3.99991 2.99838 4.19497 2.62711 4.54523C2.25584 4.89549 2.03253 5.37444 2.00293 5.884Z"
                  fill="#982546"
                />
                <path
                  d="M18 8.11816L10 12.1182L2 8.11816V14.0002C2 14.5306 2.21071 15.0393 2.58579 15.4144C2.96086 15.7895 3.46957 16.0002 4 16.0002H16C16.5304 16.0002 17.0391 15.7895 17.4142 15.4144C17.7893 15.0393 18 14.5306 18 14.0002V8.11816Z"
                  fill="#982546"
                />
              </svg>
            </div>
          </a>
          <a href="tel:+919043528782">
            <div className="bg-white rounded-full p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H5.153C5.38971 2.00011 5.6187 2.08418 5.79924 2.23726C5.97979 2.39034 6.10018 2.6025 6.139 2.836L6.879 7.271C6.91436 7.48222 6.88097 7.69921 6.78376 7.89003C6.68655 8.08085 6.53065 8.23543 6.339 8.331L4.791 9.104C5.34611 10.4797 6.17283 11.7293 7.22178 12.7782C8.27072 13.8272 9.52035 14.6539 10.896 15.209L11.67 13.661C11.7655 13.4695 11.9199 13.3138 12.1106 13.2166C12.3012 13.1194 12.5179 13.0859 12.729 13.121L17.164 13.861C17.3975 13.8998 17.6097 14.0202 17.7627 14.2008C17.9158 14.3813 17.9999 14.6103 18 14.847V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H15C7.82 18 2 12.18 2 5V3Z"
                  fill="#982546"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
