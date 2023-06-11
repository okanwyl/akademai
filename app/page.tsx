import { Card, Title, Text, Metric, Grid, Icon } from '@tremor/react';
import UniversityStatusTable, { University } from './table';
import UniversityLegend from "./legend"

export const dynamic = 'auto';

async function getUniversityData() {
  const res = await fetch('http://89.252.131.124:8080/api/university')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json();


  const data: University[] = response.data.map((item: any) => {
    const user: University = {
      id: item.id,
      name: item.name,
      initials: item.initials,
      href: item.href,
      scholar: item.scholar,
      created_at: item.created_at,
      updated_at: item.updated_at
    };
    return user;
  });


  return data
}

interface UniversityParameter {

}

async function getGlobalMetricInstructor() {
  const res = await fetch('http://89.252.131.124:8080/api/metric/university')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json();

  const data = response.data;
  const metric: InstructorMetric = {
    parseable: data.parseable,
    notParseable: data.notParseable,
    publicationCount: data.publicationCount,
    courseCount: data.courseCount
  }
  return metric
}

export interface InstructorMetric {
  parseable: number;
  notParseable: number;
  publicationCount: number;
  courseCount: number;
}

async function getParameterData(universities: University[]): Promise<UniversityParameter[]> {
  const calculated: UniversityParameter[] = []
  for (const uni of universities) {
    const res = await fetch(`http://89.252.131.124:8080/api/university/${uni.id}/parameter`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await res.json();
    const parameter: UniversityParameter = {
      name: uni.name,
      instructor: response.data.instructors,
      courses: response.data.courses,
      publications: response.data.publications,
    };
    calculated.push(parameter);
  }
  return calculated
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const data: University[] = await getUniversityData()
  const metric: InstructorMetric = await getGlobalMetricInstructor();
  console.log(metric);
  // const parameterArray = await getParameterData(data);




  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Üniversiteler</Title>
      <Text>
        Bu sayfada otomatik olarak toplanan üniversitelerin listesini ve metriklerini bulabilirsiniz.
      </Text>
      {/* <Search /> */}
      <Card className="mt-6">
        {/* @ts-expect-error Server Component */}
        <UniversityStatusTable university={data} />
      </Card>
      <Card className="mt-6">
        {/* @ts-expect-error Server Component */}
        <UniversityLegend metric={metric} />
      </Card>
      <div className="mt-6">
        <Grid className="gap-6" numColsSm={2} numColsLg={2}>
          <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
            <Text>Toplam tez sayısı</Text>
            <Metric>{metric.publicationCount} adet</Metric>
          </Card>
          <Card className="max-w-xs" decoration="top" decorationColor="indigo">
            <Text>Toplam ders sayısı</Text>
            <Metric>{metric.courseCount} adet</Metric>
          </Card>
        </Grid>
      </div>
    </main>
  );
}
