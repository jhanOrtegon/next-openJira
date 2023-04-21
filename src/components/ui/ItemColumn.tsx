import { Card } from "@nextui-org/react";
import { NextPage } from "next";
import { TItemColumn } from "./types";

export const ItemColumn: NextPage<TItemColumn> = ({ note, date, id }) => {
  const onDragStart = (event: React.DragEvent) => {
    console.log({ event });
    event.dataTransfer?.setData("text", id);
  };

  const onDragEnd = (event: React.DragEvent) => {
    console.log({ event });
  };

  return (
    <Card
      isHoverable
      variant="bordered"
      isPressable
      className="h-24 mb-3 hover:bg-zinc-800"
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Card.Body className="p-2 overflow-hidden">{note}</Card.Body>
      <Card.Footer className="p-2 flex justify-end text-xs">{date}</Card.Footer>
    </Card>
  );
};
