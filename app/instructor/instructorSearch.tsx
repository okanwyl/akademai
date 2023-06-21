//@ts-nocheck
"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  TextInput,
  Table,
  Badge,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";

export default function Search({ data }) {
  const arr = JSON.parse(data);

  const searchRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setActive(value.trim().length > 0);
    setClicked(true);
  };

  // Filter the array based on the query
  const filteredArray = arr.filter((item) =>
    item.titled_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative" ref={searchRef}>
      <TextInput
        placeholder="Akademisyen arama"
        type="text"
        value={query}
        onClick={handleClick}
        onChange={handleChange}
      />
      {clicked && query != "" && (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Bağlı Olduğu Üniversite</TableHeaderCell>
              <TableHeaderCell>Akademisyen Adı</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ "background-color": "#ffffff" }}>
            {filteredArray.map((frontMatter) => (
              <TableRow key={frontMatter.id}>
                <TableCell>
                  <Badge>{frontMatter.university.name}</Badge>
                </TableCell>
                <TableCell>
                  <Link href={`./instructors/${frontMatter.id}`}>
                    {frontMatter.filtered_name}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
