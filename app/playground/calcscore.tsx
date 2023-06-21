import { Instructor } from "../instructors/[id]/page";

const calculateScore = (instructor: Instructor): number => {
  const max_point = 30;
  var score =
    instructor.citedby * 0.03 +
    instructor.citedby5y * 0.05 +
    instructor.hindex5y * 0.02 +
    instructor.i10index * 0.06 +
    instructor.i10index5y * 0.07;
  if (score > 30) {
    score = 30;
  }
  const retScore = score / 30;
  return Number(retScore.toFixed(2));
};

export default calculateScore;
