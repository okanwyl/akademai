//@ts-nocheck
"use client";

import Link from "next/link";
import { useRef, useState } from "react";

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
      <input
        className="border-normal-text focus:outline-none border border-solid
                    box-border w-full rounded-lg
                    text-normal-text text-sm p-2
                    dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
        placeholder="Akademisyen Arama"
        type="text"
        value={query}
        onClick={handleClick}
        onChange={handleChange}
      />
      {clicked && query != "" && (
        <table
          className="mt-2 p-2 absolute top-full inset-x-0 max-h-200px "
          style={{ "background-color": "#ffffff" }}
        >
          <thead>
            <tr>
              <th>Akademisyen Adı</th>
              <th>Üniversitesi</th>
            </tr>
          </thead>
          <tbody style={{ "background-color": "#ffffff" }}>
            {filteredArray.map((frontMatter) => (
              <tr
                className="bg-white text-normal-text mt-2 leading-4 dark:bg-background-dark-mode last:mb-4"
                style={{ "background-color": "#ffffff" }}
                key={frontMatter.id}
              >
                <td>
                  <Link href={`./instructors/${frontMatter.id}`}>
                    {frontMatter.filtered_name}
                  </Link>
                </td>
                <td>{frontMatter.university.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
