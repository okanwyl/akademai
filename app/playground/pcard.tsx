"use client";

import { Card, Text, Metric, Flex, Badge } from "@tremor/react";
import { Instructor } from "../instructors/[id]/page";
import calculateScore from "./calcscore";
import { Tooltip } from "@nextui-org/react";

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
      {data.parsable ? (
        <Flex className="mt-4">
          <Text>Hesaplanan Başarı Puanı</Text>
          <Text>
            <Tooltip content="Bu hesaplanan skor 0 ile 1 arasında olabilir">
            <Badge color="emerald">{calculateScore(data)}</Badge>
            </Tooltip>
          </Text>
        </Flex>
      ) : (
        <></>
      )}
      {interests.map((pub) => (
        <Flex className="mt-4" key={pub}>
          <Badge>{pub}</Badge>
        </Flex>
      ))}
    </Card>
  );
}
