"use client";

import { Card, Text, Metric, Flex, Bold, Badge } from "@tremor/react";
import { Instructor } from "../instructors/[id]/page";
import Link from "next/link";
import { Image } from "@nextui-org/react";


export default function AvatarOnInstructor({ data }: { data: Instructor }) {
  return (
    <Card className="gap-6">
      <Flex alignItems="center" justifyContent="center">
        <Image
          src={data.profile_picture}
          width={250}
          height={250}
          alt="instructor profile picture"
        />
      </Flex>
    </Card>
  );
}
