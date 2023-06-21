//@ts-nocheck
"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  TextInput,
  Badge,
  Table,
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
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative" ref={searchRef}>
      <TextInput
        placeholder="Kurs arama"
        type="text"
        value={query}
        onClick={handleClick}
        onChange={handleChange}
      />

      {clicked && query != "" && (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Ders Adı</TableHeaderCell>
              <TableHeaderCell>Kodu</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredArray.map((frontMatter) => (
              <TableRow key={frontMatter.id}>
                <TableCell key={frontMatter.id}>
                  <Link href={`./courses/${frontMatter.id}`}>
                    {frontMatter.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge>
                    <Link href={`./courses/${frontMatter.id}`}>
                      {frontMatter.code}
                    </Link>
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
