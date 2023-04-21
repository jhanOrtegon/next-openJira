import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { TColumnOpenJira } from "./types";
import { PaperPlus } from "react-iconly";
import { useDispatch } from "react-redux";
import { changeStatusEntry } from "@/redux";

export const Column: NextPage<TColumnOpenJira> = ({
  children,
  title,
  iconAdd,
  onShowNewEntry,
}) => {
  const dispatch = useDispatch();

  const onDrop = (event: React.DragEvent) => {
    const id = event.dataTransfer.getData("text");
    const status =
      title === "Pendientes"
        ? "pending"
        : title === "En progreso"
        ? "in-progress"
        : "finished";

    dispatch(changeStatusEntry({ id, status }));
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };
  return (
    <Card
      onDrop={onDrop}
      onDragOver={onDragOver}
      variant="bordered"
      css={{ height: "85vh" }}
    >
      <Card.Header>
        <Grid.Container gap={1}>
          <Grid>{title}</Grid>

          {iconAdd && (
            <Grid className="cursor-pointer" onClick={onShowNewEntry}>
              <PaperPlus set="bold" primaryColor="white" size={"medium"} />
            </Grid>
          )}
        </Grid.Container>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
