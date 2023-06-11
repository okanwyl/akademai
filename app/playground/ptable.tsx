"use client";

import {
  Card,
  Text,
  Metric,
  Flex,
  Badge,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableHead,
  Title,
} from "@tremor/react";
import { Publication } from "../instructors/[id]/page";
import { useState } from "react";

export default function PublicationTableOnInstructor({
  data,
}: {
  data: Publication[];
}) {
  const [expanded, setExpanded] = useState(false);
  const text = data;

  return (
    <Card>
      <Title>Akademik çalışmaları</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Adı</TableHeaderCell>
            <TableHeaderCell>Atıf Sayısı</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="truncate">{item.title}</TableCell>
              <TableCell>
                <Text>{item.num_citations}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
