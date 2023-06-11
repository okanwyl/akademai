"use client";

import { Card, Text, Metric, Flex, Badge } from "@tremor/react";
import { Instructor } from "../instructors/[id]/page";

export default function PublicationInfoCardInstructor({
  data,
  interests,
}: {
  data: Instructor;
  interests: string[];
}) {
  return (
    <Card className="max-w-sm">
      <Text>Toplam yazdığı akademik yazı ve ilgi alanları</Text>
      {data.publications === undefined ? (
        <Metric>0</Metric>
      ) : (
        <Metric>{data.publications.length}</Metric>
      )}

      {interests.map((pub) => (
        <Flex className="mt-4" key={pub}>
          <Badge>{pub}</Badge>
        </Flex>
      ))}
    </Card>
  );
}