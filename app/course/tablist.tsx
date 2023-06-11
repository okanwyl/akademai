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
} from "@tremor/react";
import Link from "next/link";
import { Course } from "../instructors/[id]/page";

export default function CourseAllTable({ data }: { data: Course[] }) {
  return (
    <>
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
