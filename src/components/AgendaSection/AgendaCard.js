import React from "react";
import Image from "next/image";

const AgendaCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 mb-16">
      <div className="font-niconne text-center text-[44px] mb-10">
        {props.title}
      </div>
      <div>
        <Image
          src={props.image}
          alt={props.title}
          className={props.isLeft ? "ml-12" : "-ml-12"}
        />
      </div>
      <div className="font-libreBaskerville text-center text-[18px] mb-4 font-bold">
        {props.date}
      </div>
      <div className="font-libreBaskerville text-center text-[18px] mb-4">
        {props.time}
      </div>
      <div className="font-libreBaskerville text-center text-[18px] mb-4">
        {props.location}
      </div>
      <a href={props.link} target="_blank">
        <div className="flex items-center justify-center font-libreBaskerville text-[18px] text-radicalRed">
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
  );
};

export default AgendaCard;
