"use client";
import {
  Text,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Badge,
  Divider,
  Title,
  TableHead,
  TableHeaderCell,
  Bold,
  Callout,
} from "@tremor/react";
import Link from "next/link";
import { CheckCircleIcon} from "@heroicons/react/24/solid";

import { Course } from "../instructors/[id]/page";

export default function CourseAllTable({ data }: { data: Course[] }) {
  return (
    <>
      <Callout
        className="h-12 mt-4"
        title="Kursların üstüne tıklayarak detaylı bilgi alabilirsiniz."
        icon={CheckCircleIcon}
        color="blue"
      >
        Turbine reached critical speed. Immediately reduce turbine speed.
      </Callout>
      <Divider />
      <Title>Bulunan tüm dersler</Title>
      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Ders Adı</TableHeaderCell>
            <TableHeaderCell>Kodu</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>
                <Link href={`./courses/${item.id}`}>
                  <Text>{item.name}</Text>
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`./courses/${item.id}`}>
                  <Badge color="blue">{item.code}</Badge>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
