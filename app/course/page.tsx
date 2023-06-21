//@ts-nocheck
import { Card, Text, Metric, Tab } from "@tremor/react";
import { Course } from "../instructors/[id]/page";
import CourseAllTable from "./tablist";

import Search from "./courseSearch";

async function getCourses(): Promise<Course[]> {
  const res = await fetch(`http://89.252.131.124:8080/api/course/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();

  const data = response.data;
  return data;
}

export default async function CourseTablePage() {
  const courses = await getCourses();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Search data={JSON.stringify(courses)} />
      <CourseAllTable data={courses} />
    </main>
  );
}
