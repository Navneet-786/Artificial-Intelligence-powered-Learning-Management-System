import { Textarea } from "@/components/ui/textarea";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TopicInput = ({ setTopic, setDifficultyLevel }) => {
  return (
    <div className="mt-2 w-full w-full md:max-w-[80%] mx-auto flex flex-col gap-6">
      {/* Heading */}
      <div>
        <h2 className="text-lg font-semibold text-slate-700">
          Topic or Content
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Enter a topic or paste content to generate AI-powered study material
        </p>
      </div>

      {/* Textarea */}
      <Textarea
        placeholder="Start writing your topic or content here..."
        className="
          min-h-[220px]
          text-base
          md:text-lg
          leading-relaxed
          resize-none
          rounded-xl
          border-slate-300
          focus:border-purple-500
          focus:ring-purple-500/30
          placeholder:text-slate-400
        "
        onChange={(e) => {
          setTopic(e.target.value);
        }}
      />

      {/* Difficulty */}
      <div>
        <h2 className="text-sm font-medium text-slate-600 mb-2">
          Difficulty Level
        </h2>

        <Select onValueChange={(value) => setDifficultyLevel(value)}>
          <SelectTrigger
            className="
              w-full
              h-11
              rounded-xl
              border-slate-300
              focus:border-purple-500
              focus:ring-purple-500/30
            "
          >
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>

          <SelectContent className="rounded-xl">
            <SelectGroup>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Moderate">Moderate</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TopicInput;
