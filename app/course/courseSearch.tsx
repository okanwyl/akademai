//@ts-nocheck
"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  TextInput,
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

      {/* <input
        className="border-normal-text focus:outline-none border border-solid
                    box-border w-full rounded-lg
                    text-normal-text text-sm p-2
                    dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
        placeholder="Kurs Arama"
        type="text"
        value={query}
        onClick={handleClick}
        onChange={handleChange}
      /> */}
      {clicked && query != "" && (
        <Table
        // className="mt-2 p-2 absolute top-full inset-x-0 max-h-200px "
        // style={{ "background-color": "#ffffff" }}
        >
          <TableHead>
            <TableRow>
              <TableHeaderCell>Ders Adı</TableHeaderCell>
              <TableHeaderCell>Kodu</TableHeaderCell>
            </TableRow>
          </TableHead>

          {/* <thead>
            <tr>
              <th>Kurs Adı</th>
              <th>Kodu</th>
            </tr>
          </thead> */}
          <TableBody>
            {filteredArray.map((frontMatter) => (
              <TableRow key={frontMatter.id}>
                <TableCell
                  // className="bg-white text-normal-text mt-2 leading-4 dark:bg-background-dark-mode last:mb-4"
                  key={frontMatter.id}
                >
                  <td>{frontMatter.name}</td>
                </TableCell>
                <TableCell>
                  <Link href={`./courses/${frontMatter.id}`}>
                    {frontMatter.code}
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
