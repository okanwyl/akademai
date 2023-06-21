"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Badge,
  Bold,
  Button,
  Card,
  Flex,
  Metric,
  Text,
} from "@tremor/react";
import Link from "next/link";
import { CourseEndpoint } from "../courses/[id]/page";
import { Tooltip } from "@nextui-org/react";
import { getTooltip } from "../utils/tooltip";

export default function CourseInfoCard({ data }: { data: CourseEndpoint }) {
  return (
    <Card className="max-w-sm">
      <Metric>{data.name}</Metric>
      <Flex className="mt-4">
        <Text>Ders Kodu</Text>
        <Text>
          <Bold>{data.code}</Bold>
        </Text>
      </Flex>
      <Flex className="mt-4">
        <Text>Üniversite</Text>
        <Text>
          <Bold>{data.university.name}</Bold>
        </Text>
      </Flex>
      <Flex className="mt-4">
        <Text>Kısaltması</Text>
        <Text>
          <Badge>{data.university.initials}</Badge>
        </Text>
      </Flex>

      <Flex className="mt-4">
        <a
          target="_blank"
          href={data.href}
          rel="noopener noreferrer"
          className="max-w-md mx-auto"
        >
          <Button className="max-w-md mx-auto">Kurs sayfasına git</Button>
        </a>
      </Flex>

      {/* <Flex className="mt-4">
        <Text>Modelin varsayımı</Text>
        <Text>
          <Tooltip content={getTooltip(data.type)}>
            <Badge>
              <Text>{data.type}</Text>
            </Badge>
          </Tooltip>
        </Text>
      </Flex> */}
      <Flex className="mt-4">
        <AccordionList className="max-w-md mx-auto">
          <Accordion>
            <AccordionHeader>Ders İçeriği</AccordionHeader>
            <AccordionBody>{data.info}</AccordionBody>
          </Accordion>
        </AccordionList>
      </Flex>
    </Card>
  );
}
