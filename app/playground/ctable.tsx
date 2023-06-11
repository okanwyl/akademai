"use client";
import {
  Text,
  Badge,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Title,
  TableHead,
  TableHeaderCell,
  Divider,
} from "@tremor/react";
import { Course, Instructor } from "../instructors/[id]/page";
import Link from "next/link";

export default function CourseTable({ data }: { data: Course[] }) {
  return (
    <>
      <Divider />
      <Title>Bu üniversitede olan diğer dersler</Title>
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
                  <Badge color="fuchsia">{item.code}</Badge>
                </Link>
              </TableCell>
              {/* <TableCell>
              <Badge color="emerald" icon={SignalIcon}>
                {item.status}
              </Badge>
            </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
