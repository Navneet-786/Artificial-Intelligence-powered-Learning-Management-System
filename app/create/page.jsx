"use client";
import React, { useEffect, useState } from "react";
import { Mulish } from "next/font/google";
import SelectOptions from "./_components/SelectOptions";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

const pacifico = Mulish({
  subsets: ["latin"],
  weight: "400", // Pacifico me sirf 400 hota hai
});

const Create = () => {
  const { user } = useUser();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  //create router
  const router = useRouter();

  const [formData, setFormData] = useState({});
  const isFormValid =
    formData.courseType && formData.topic && formData.difficultyLevel;
  //handle user
  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => {
      return {
        ...prev,
        [fieldName]: fieldValue,
      };
    });
  };

  //generate course outline
  const GenerateCourseOutline = async () => {
    const courseId = uuidv4();
    setLoading(true);
    const result = await axios.post("/api/generate-course-outline", {
      courseId: courseId,
      ...formData,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });

    setLoading(false);
    router.replace("/dashboard");

    console.log("create result: ", result?.data?.result?.res);
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
              handleUserInput("courseType", value);
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
          <Button
            disabled={!isFormValid}
            onClick={() => GenerateCourseOutline()}
          >
            {loading ? <Loader className="animate-spin" /> : "Generate"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Create;
