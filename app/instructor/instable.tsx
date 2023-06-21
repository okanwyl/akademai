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
import { Instructor } from "../instructors/[id]/page";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function InstructorAllTable({ data }: { data: Instructor[] }) {
  return (
    <>
      <Callout
        className="h-12 mt-4"
        title="Akademisyenlerin üstüne tıklayarak detaylı bilgi alabilirsiniz."
        icon={CheckCircleIcon}
        color="blue"
      ></Callout>
      <Divider />
      <Title>Bulunan tüm akademisyenler</Title>
      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Akademisyen Adı</TableHeaderCell>
            <TableHeaderCell>Üniversitesi</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.filtered_name}

              onClick={()=> (window.location.href = `./instructors/${item.id}`)}

            >
              <TableCell>
                <Link href={`./instructors/${item.id}`}>
                  <Text>{item.filtered_name}</Text>
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`./instructors/${item.id}`}>
                  <Badge>{item.university.name}</Badge>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
