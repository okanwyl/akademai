import {
  Card,
  Title,
  Text,
  Grid,
  Flex,
  Metric,
  BarList,
  Bold,
  DonutChart,
  Callout,
  Divider,
} from "@tremor/react";
// import Search from "../../search";
import { University } from "../../table";
import PublicationInfoCardInstructor from "../../playground/pcard";
import InstructorInfoCard from "../../playground/icard";
import CourseInfoInstructorPage from "../../playground/cpage";
import PublicationTableOnInstructor from "../../playground/ptable";
import InstructorMetricCard from "../../playground/imetric";
import AvatarOnInstructor from "../../playground/avatar";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import calculateScore from "../../playground/calcscore";

export interface Course {
  id: number;
  name: string;
  code: string;
  info: string;
  href: string;
  updated_at: string;
  created_at: string;
}

export interface Publication {
  id: number;
  title: string;
  citation: string;
  author_pub_id: string;
  num_citations: string;
  updated_at: string;
  created_at: string;
  publication_type: string;
}

export interface Instructor {
  id: number;
  scholar_id: number;
  profile_picture: string;
  filtered_name: string;
  titled_name: string;
  affilation: string;
  email_domain: string;
  interests: string;
  citedby: number;
  citedby5y: number;
  hindex5y: number;
  i10index: number;
  i10index5y: number;
  parsable: boolean;
  visited: boolean;
  university: University;
  courses: Course[];
  publications: Publication[];
}

export interface PlacementMetric {
  placementMostCited: number;
  placementMostPub: number;
}

async function getInstructor(id: number) {
  const res = await fetch(`http://89.252.131.124:8080/api/instructor/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();

  const data = response.data;
  const metric: Instructor = {
    id: data.id,
    scholar_id: data.scholar_id,
    profile_picture: data.profile_picture,
    filtered_name: data.filtered_name,
    titled_name: data.titled_name,
    affilation: data.affilation,
    email_domain: data.email_domain,
    interests: data.interests,
    citedby: data.citedby,
    citedby5y: data.citedby5y,
    hindex5y: data.hindex5y,
    i10index: data.i10index,
    i10index5y: data.i10index5y,
    parsable: data.parsable,
    visited: data.visited,
    university: data.university,
    courses: data.courses,
    publications: data.publications,
  };
  return metric;
}

async function getInstructorMetric(id: number) {
  const res = await fetch(
    `http://89.252.131.124:8080/api/instructor/${id}/metric`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();

  const data = response.data;
  const metric: PlacementMetric = {
    placementMostCited: data.placementMostCited,
    placementMostPub: data.placementMostPub,
  };
  return metric;
}

export default async function InstructorsPage({
  params,
}: {
  params: { id: string };
}) {
  const dataFormatter = (number: number) =>
    Intl.NumberFormat("tr").format(number).toString();

  const ins = await getInstructor(Number(params.id));
  const metric = await getInstructorMetric(Number(params.id));

  const convertedArray = [
    { name: "citedby", value: ins.citedby },
    { name: "citedby5y", value: ins.citedby5y },
    { name: "hindex5y", value: ins.hindex5y },
    { name: "i10index", value: ins.i10index },
    { name: "i10index5y", value: ins.i10index5y },
  ];

  const interestsArray = ins.interests.split(",");

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Callout
        className="h-12 mt-4"
        title="Derslerin veya akademik çalışmanın üstüne tıklayarak detaylı bilgi alabilirsiniz."
        icon={CheckCircleIcon}
        color="blue"
      ></Callout>
      <Divider />
      <Grid className="gap-6" numColsSm={2} numColsLg={3}>
        <PublicationInfoCardInstructor data={ins} interests={interestsArray} />
        <AvatarOnInstructor data={ins} />
        <InstructorInfoCard data={ins} />
      </Grid>
      <Grid className="mt-8 gap-6" numColsSm={2} numColsLg={3}>
        <Card key="Akademik metrikler">
          <Title>Akademik Metrikler</Title>
          <Flex className="mt-6">
            <Text>Metrik</Text>
            <Text className="text-right">Değer</Text>
          </Flex>
          <BarList
            className="mt-2"
            data={convertedArray}
            valueFormatter={dataFormatter}
          />
        </Card>

        <CourseInfoInstructorPage course={ins.courses} data={ins} />
        <InstructorMetricCard data={metric} />
      </Grid>
      <PublicationTableOnInstructor data={ins.publications} />
    </main>
  );
}
