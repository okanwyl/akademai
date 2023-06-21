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
  Divider,
} from "@tremor/react";
import { Publication } from "../instructors/[id]/page";
import { useState } from "react";
import { Button, Collapse, Tooltip } from "@nextui-org/react";
import { getTooltip } from "../utils/tooltip";

function openOnNewTab(pub_id: string): string {
  if (pub_id) {
    const id = pub_id.split(":");

    const citationUrl =
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=" +
      id[0] +
      "&citation_for_view=" +
      pub_id;
    window.open(citationUrl, "_blank");
  }
  return "#";
}
export default function PublicationTableOnInstructor({
  data,
}: {
  data: Publication[];
}) {
  const [expanded, setExpanded] = useState(false);
  const text = data;

  return (

    <>
      <Divider />
      <Collapse title="Akademik çalışmaları görmek için tıkla.">
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
                <TableRow
                  key={item.id}
                  onClick={() => openOnNewTab(item.author_pub_id)}
                >
                  <TableCell className="truncate">{item.title}</TableCell>
                  <TableCell>
                    <Text>{item.num_citations}</Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Collapse>
    </>
 
  );
}
