"use client";
import { Card, Flex, Metric, Text, Bold, Badge } from "@tremor/react";
import { PlacementMetric } from "../instructors/[id]/page";

export default function InstructorMetricCard({
  data,
}: {
  data: PlacementMetric;
}) {
  return (
    <Card className="max-w-sm">
      <Metric>Başarımlar</Metric>
      <Flex className="mt-4">
        <Text>En çok atıf alan akademisyen sıralaması</Text>
        <Text>
          <Bold>{data.placementMostCited}</Bold>
        </Text>
      </Flex>
      <Flex className="mt-4">
        <Text>En çok akademik çalışma yayınlayan sıralaması</Text>
        <Text>
          <Bold>{data.placementMostCited}</Bold>
        </Text>
      </Flex>
    </Card>
  );
}
