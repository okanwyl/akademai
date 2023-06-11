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
import { Instructor } from "../instructors/[id]/page";

export default function InstructorAllTable({
  data,
}: {
  data: Instructor[];
}) {
  return (
    <>
      <Title>Bulunan tüm akademisyenler</Title>
      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Ders Adı</TableHeaderCell>
            <TableHeaderCell>Üniversitesi</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.filtered_name}>
              <TableCell>
                <Link href={`./instructors/${item.id}`}>
                  <Text>{item.filtered_name}</Text>
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`./instructors/${item.id}`}>
                  {item.university.name}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
