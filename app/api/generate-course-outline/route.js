import { NextResponse } from "next/server";
import { generateCourse } from "../../../configs/AiModel";
import { db } from "../../../configs/db";
import { STUDY_MATERIAL } from "../../../configs/schema";
export async function POST(req) {
  const body = await req.json();
  const { courseId, topic, courseType, difficultyLevel, createdBy } = body;

  console.log(courseId, topic, courseType, difficultyLevel, createdBy);

  //generate course layout
  const aiRes = await generateCourse({
    topic,
    courseType,
    difficultyLevel,
  });

  const dbRes = await db
    .insert(STUDY_MATERIAL)
    .values({
      courseId: courseId,
      courseType: courseType,
      createdBy: createdBy,
      topic: topic,
      difficultyLevel,
      courseLayout: aiRes,
    })
    .returning({ res: STUDY_MATERIAL });
  console.log("databse Response: ", dbRes);

  return NextResponse.json({ result: dbRes[0] });
}
