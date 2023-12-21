import React from "react";
import Image from "next/image";

const AgendaBigCard = (props) => {
  return (
    <div
      className={`flex ${
        props.isLeft ? "flex-row-reverse" : "flex-row"
      } items-start justify-between w-[80vw] mx-auto`}
    >
      <div className="w-2/5">
        <Image src={props.image} alt={props.title} />
      </div>
      <div className="pt-44">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="41"
          viewBox="0 0 45 41"
          fill="none"
        >
          <path
            d="M22.3963 40.5425L19.2919 37.5438C7.77581 27.7133 0.243804 21.0845 0.151767 12.8031C0.0766836 6.04726 5.28226 0.727161 12.0812 0.611256C15.8097 0.547695 19.5575 2.22759 22.0015 5.01957C24.3826 2.14533 28.0917 0.338317 31.8201 0.274756C38.6191 0.15885 43.9409 5.29948 44.016 12.0554C44.1081 20.3368 36.7262 27.2198 25.4329 37.4391L22.3963 40.5425Z"
            fill="#FF2459"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 px-8 pt-8">
        <div className="mb-10 font-niconne text-blackPearl text-center text-[60px]">
          {props.title}
        </div>
        <div className="mb-4 font-libreBaskerville text-blackPearl text-center text-[20px]">
          {props.date}
        </div>
        <div className="mb-4 font-libreBaskerville text-blackPearl text-center text-[20px]">
          {props.time}
        </div>
        <div className="mb-4 font-libreBaskerville text-blackPearl text-center text-[20px]">
          {props.location}
        </div>
        <a href={props.link} target="_blank">
          <div className="flex items-center justify-center font-libreBaskerville text-[20px] text-radicalRed">
            View Map
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M9.5 18.77L15.5 12.77L9.5 6.77002"
                  stroke="#FF2459"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AgendaBigCard;
