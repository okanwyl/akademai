'use client';

import { Card, Text, Metric, Flex, Bold, Badge } from '@tremor/react'; import { Instructor } from '../instructors/[id]/page';


export default function InstructorInfoCard({ data }: { data: Instructor }) {
    return (
        <Card className="max-w-sm">
            <Metric>{data.filtered_name}</Metric>
            <Flex className="mt-4">
                <Text>Bilinen ünvan</Text>
                <Text><Bold>{data.titled_name}</Bold></Text>
            </Flex>
            <Flex className="mt-4">
                <Text>Email uzantısı</Text>
                <Text><Bold>{data.email_domain}</Bold></Text>
            </Flex>
            <Flex className="mt-4">
                <Text>İlişki </Text>
                <Text><Bold>{data.university.name}</Bold></Text>
            </Flex>
            <Flex className="mt-4">
                <Text>Akademik veri toplandı</Text>
                {data.parsable === true ?
                    <Badge color='emerald'>Evet</Badge> :
                    <Badge color='red'>Hayır</Badge>
                }
            </Flex>

            <Flex className="mt-4">
                <Text>Universite verisi tarandı</Text>
                {data.visited === true ?
                    <Badge color='emerald'>Evet</Badge> :
                    <Badge color='red'>Hayır</Badge>

                }
            </Flex>
        </Card>
    );
}
