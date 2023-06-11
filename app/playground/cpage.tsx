'use client';

import { Card, Text, Metric, Flex, Bold, Badge, Title, ListItem, List } from '@tremor/react'; import { Course, Instructor } from '../instructors/[id]/page';
import Link from 'next/link';


export default function CourseInfoInstructorPage({ data, course }: { data: Instructor, course: Course[] }) {
    return (
        <Card className="max-w-sm">
            <Title>Verdiği dersler</Title>
            <Text>{data.university.name}</Text>
            <Metric>{data.courses.length}</Metric>


            {course.map((pub) => (
                <Flex className="mt-4" key={pub.id}>
                    <Badge color='amber'><Link href={`./courses/${pub.id}`}>{pub.name}</Link></Badge>
                </Flex>
            ))}

        </Card>
    );
}
