"use client";
import React, { useEffect, useState } from "react";
import { Mulish } from "next/font/google";
import SelectOptions from "./_components/SelectOptions";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
const pacifico = Mulish({
  subsets: ["latin"],
  weight: "400", // Pacifico me sirf 400 hota hai
});

const Create = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState([]);
  //handle user
  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => {
      return {
        ...prev,
        [fieldName]: fieldValue,
      };
    });
  };
  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-2xl md:text-4xl text-primary text-center">
        Start Building Your Personal Study Material
      </h2>

      <p
        className={`text-center text-slate-500 text-sm md:text-lg mt-3 ${pacifico.className}`}
      >
        Fill all details in order to generate study material for your next
        project
      </p>

      <div className="mt-10 w-full md:w-[80%]">
        {step == 0 ? (
          <SelectOptions
            selectStudyType={(value) => {
              handleUserInput("studyType", value);
            }}
          />
        ) : (
          <TopicInput
            setTopic={(value) => {
              handleUserInput("topic", value);
            }}
            setDifficultyLevel={(value) =>
              handleUserInput("difficultyLevel", value)
            }
          />
        )}
      </div>

      <div className="flex justify-between w-full mt-32">
        {step !== 0 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        {step == 0 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button>Generate</Button>
        )}
      </div>
    </div>
  );
};

export default Create;
