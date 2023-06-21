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
            <TableRow
              key={item.name}
              onClick={() => (window.location.href = `./courses/${item.id}`)}
            >
              <TableCell>
                <Text>{item.name}</Text>
              </TableCell>

              <TableCell>
                <Badge color="blue">{item.code}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
