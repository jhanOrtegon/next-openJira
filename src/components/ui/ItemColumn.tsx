import { Button, Card } from "@nextui-org/react";
import { NextPage } from "next";
import { TItemColumn } from "./types";
import { useForm } from "@/hooks";
import { NewEntry } from "./NewEntry";
import { Add } from "../icons";
import { PaperPlus } from "react-iconly";

export const ItemColumn: NextPage<TItemColumn> = ({ note, date }) => {
  return (
    <Card
      isHoverable
      variant="bordered"
      isPressable
      className="h-24 mb-3 hover:bg-zinc-800"
    >
      <Card.Body className="p-2 overflow-hidden">{note}</Card.Body>
      <Card.Footer className="p-2 flex justify-end text-xs">{date}</Card.Footer>
    </Card>
  );
};
