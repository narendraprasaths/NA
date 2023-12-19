import React from "react";
import Image from "next/image";
import CoupleHeart from "@/assets/couple/couple-heart.png";
import CoupleSparkle from "@/assets/couple/couple-sparkle.svg";
import CoupleLeaf from "@/assets/couple/couple-leaf.svg";
import Couple from "@/assets/couple/couple.svg";
import CoupleLeft from "@/assets/couple/couple-left.svg";
import CoupleRight from "@/assets/couple/couple-right.svg";
import CoupleFruit from "@/assets/couple/couple-fruit.svg";

const CoupleSection = () => {
  return (
    <div className="relative pt-[100px] lg:pt-[200px]">
      <div className="absolute top-8 inset-x-4 lg:inset-x-0">
        <Image
          src={CoupleHeart}
          alt="Couple Heart"
          priority={true}
          className="mx-auto"
        />
      </div>
      <div className="absolute -top-40 left-0 -z-10">
        <Image
          src={CoupleSparkle}
          alt="Couple Sparkle"
          priority={true}
          className="w-[120px] lg:w-auto"
        />
      </div>
      <div className="absolute top-64 lg:top-96 right-0">
        <Image
          src={CoupleLeaf}
          alt="Couple Leaf"
          priority={true}
          className="w-[150px] lg:w-auto"
        />
      </div>
      <div className="absolute top-48 left-0 -z-20 opacity-40">
        <Image
          src={CoupleLeft}
          alt="Couple Leaf"
          priority={true}
          className="w-[200px] lg:w-auto"
        />
      </div>
      <div className="absolute top-48 right-0 -z-20 opacity-40">
        <Image
          src={CoupleRight}
          alt="Couple Leaf"
          priority={true}
          className="w-[200px] lg:w-auto"
        />
      </div>
      <div className="font-niconne text-[38px] lg:text-[60px] text-darkBlue text-center">
        Happy Couple
      </div>
      <div className="flex items-center justify-center mt-2">
        <Image
          src={Couple}
          alt="Couple"
          priority={true}
          className="mx-auto h-[222px] lg:h-auto w-[222px] lg:w-auto"
        />
      </div>
      <div className="flex items-center justify-center mt-2">
        <Image
          src={CoupleFruit}
          alt="Couple Fruit"
          priority={true}
          className="mx-auto h-20 lg:h-auto w-20 lg:w-auto opacity-20"
        />
      </div>
    </div>
  );
};

export default CoupleSection;
