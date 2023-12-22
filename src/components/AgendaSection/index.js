import React from "react";
import Image from "next/image";
import AgendaTitleHeart from "@/assets/agenda/agenda-title-heart.svg";
import AgendaRose from "@/assets/agenda/agenda-rose.svg";
import AgendaCard from "@/components/AgendaSection/AgendaCard";
import AgendaBigCard from "@/components/AgendaSection/AgendaBigCard";
import AgendaEngagement from "@/assets/agenda/agenda-engagement.svg";
import AgendaReception from "@/assets/agenda/agenda-reception.svg";
import AgendaWedding from "@/assets/agenda/agenda-wedding.svg";

const AgendaSection = (props) => {
  return (
    <div className="relative mt-0">
      <div className="absolute right-0 -bottom-28 lg:-bottom-24 z-10">
        <Image
          src={AgendaRose}
          alt="Agenda Rose"
          priority={true}
          className="w-[170px] lg:w-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center font-niconne text-[28px] lg:text-[48px] text-darkPink mb-8">
        The Agenda
        <Image
          src={AgendaTitleHeart}
          alt="Agenda Title Heart"
          priority={true}
        />
      </div>
      {/* Agenda Mobile View */}
      <div className="block lg:hidden">
        <AgendaCard
          title="Engagement"
          date="Jan 21, 2023"
          time="10.30am - 11.00 am"
          location="Manoraj Mahal, Madurai"
          link="https://maps.app.goo.gl/JVwmW3wJUup7ZEJU6?g_st=ic"
          image={AgendaEngagement}
        />
        <AgendaCard
          title="Reception"
          date="Jan 31, 2024"
          time="6.30pm - 7.30pm"
          location="Puttuthoppu MAVMM Mahal, Arappalayam, Madurai"
          link="https://maps.app.goo.gl/56v8Rd71Z6crmWAa8"
          image={AgendaReception}
          isLeft={true}
        />
        <AgendaCard
          title="Wedding"
          date="Feb 01, 2024"
          time="10:45am - 11:15am"
          location="Puttuthoppu MAVMM Mahal, Arappalayam, Madurai"
          link="https://maps.app.goo.gl/56v8Rd71Z6crmWAa8"
          image={AgendaWedding}
        />
      </div>
      {/* Agenda Laptop View */}
      <div className="hidden lg:block pt-32 relative">
        <div className="absolute top-0 bottom-0 left-[50%]">
          <div className="border-l border-dashed border-radicalRed h-[1753px]" />
        </div>
        <AgendaBigCard
          title="Engagement"
          date="Jan 21, 2023"
          time="10.30am - 11.00 am"
          location="Manoraj Mahal, Madurai"
          link="https://maps.app.goo.gl/JVwmW3wJUup7ZEJU6?g_st=ic"
          image={AgendaEngagement}
        />
        <AgendaBigCard
          title="Reception"
          date="Jan 31, 2024"
          time="6.30pm - 7.30pm"
          location="Puttuthoppu MAVMM Mahal, Arappalayam, Madurai"
          link="https://maps.app.goo.gl/56v8Rd71Z6crmWAa8"
          image={AgendaReception}
          isLeft={true}
        />
        <AgendaBigCard
          title="Wedding"
          date="Feb 01, 2024"
          time="10:45am - 11:15am"
          location="Puttuthoppu MAVMM Mahal, Arappalayam, Madurai"
          link="https://maps.app.goo.gl/56v8Rd71Z6crmWAa8"
          image={AgendaWedding}
        />
      </div>
    </div>
  );
};

export default AgendaSection;
