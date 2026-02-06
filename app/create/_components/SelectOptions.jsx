"use client";

import Image from "next/image";
import React, { useState } from "react";

const SelectOptions = ({ selectStudyType }) => {
  const options = [
    {
      name: "Exam",
      icon: "/exam.png",
    },
    {
      name: "Job Interview",
      icon: "/interview.png",
    },
    {
      name: "Practice",
      icon: "/practice.png",
    },
    {
      name: "Coding Prep",
      icon: "/code.png",
    },
    {
      name: "Other",
      icon: "/Others.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <h2 className="text-center mb-2 text-lg">
        For Which you want to create your personal study material
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-4 ">
        {options.map((option, index) => {
          return (
            <>
              <div
                key={index}
                className={`p-4  flex flex-col items-center justify-center border rounded-xl shadow-sm 
                hover:border-2
                hover:border-b-primary 
                hover:border-t-gray-600 hover:border-l-purple-500 
                hover:border-r-slate-400 hover:scale-105 hover:shadow-xl transition-all 0.2s ${selectedOption == option?.name && "border-2 border-t-gray-600 border-l-purple-500 border-r-slate-400  shadow-xl border-b-primary "}`}
                onClick={() => {
                  setSelectedOption(option.name);
                  selectStudyType(option.name);
                }}
              >
                <Image
                  src={option?.icon}
                  alt={option.name}
                  width={50}
                  height={50}
                />
                <h2 className="text-sm mt-2">{option.name}</h2>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SelectOptions;
