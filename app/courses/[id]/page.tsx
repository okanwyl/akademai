import { Callout, Card, Divider, Flex, Grid, Text, Title } from "@tremor/react";
import { Course, Instructor } from "../../instructors/[id]/page";
import CourseInfoOnInstructor from "../../playground/cinfo";
import CourseInfoCard from "../../playground/cinfob";
import { University } from "../../table";
import CourseTable from "../../playground/ctable";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export interface CourseEndpoint {
  id: number;
  name: string;
  code: string;
  info: string;
  href: string;
  updated_at: string;
  created_at: string;
  type: string;
  instructors: Instructor[];
  university: University;
}

async function getSimilarCoruses(id: number) {
  const res = await fetch(`http://89.252.131.124:8080/api/course?q&uni=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();

  const data: Course[] = response.data;
  return data;
}

async function getCourseDetail(id: number) {
  const res = await fetch(`http://89.252.131.124:8080/api/course/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();

  const data = response.data;
  const courseDetail: CourseEndpoint = {
    id: data.id,
    name: data.name,
    code: data.code,
    info: data.info,
    href: data.href,
    type: data.type,
    updated_at: data.updated_at,
    created_at: data.created_at,
    instructors: data.instructors,
    university: data.university,
  };
  return courseDetail;
}
export default async function CoursePage({
  params,
}: {
  params: { id: string };
}) {
  const course = await getCourseDetail(Number(params.id));
  const similarCourses = await getSimilarCoruses(Number(course.university.id));

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Callout
        className="h-12 mt-4"
        title="Derslerin veya akademisyenlerin üstüne tıklayarak daha fazla bilgi alabilirsiniz."
        icon={CheckCircleIcon}
        color="blue"
      ></Callout>
      <Divider />
      <Grid className="mt-8 gap-6" numColsSm={1} numColsLg={2}>
        <CourseInfoCard data={course} />
        {course.instructors.map((instructor) => (
          <CourseInfoOnInstructor data={instructor} key={instructor.id} />
        ))}
      </Grid>
      <CourseTable data={similarCourses} />
    </main>
  );
}
