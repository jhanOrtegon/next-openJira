import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { TColumnOpenJira } from "./types";
import { PaperPlus } from "react-iconly";
import { useDispatch } from "react-redux";
import { changeStatusEntry } from "@/redux";
import { entriesService } from "@/services";
import { TEntry } from "@/types";
import { newNotify } from "@/utils";
import { Loading } from "./Loading";
import { useState } from "react";
import { useGetListEntries } from "@/hooks";

export const Column: NextPage<TColumnOpenJira> = ({
  children,
  title,
  iconAdd,
  onShowNewEntry,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { listEntriesAll } = useGetListEntries();

  const onDrop = async (event: React.DragEvent) => {
    const id = event.dataTransfer.getData("text");
    const status =
      title === "Pendientes"
        ? "pending"
        : title === "En progreso"
        ? "in-progress"
        : "finished";

    try {
      const entry = listEntriesAll.find((el) => el._id === id);
      if (Object.values(entry!).length) {
        if (entry?.status !== status) {
          setIsLoading(true);
          await entriesService.put<TEntry>(`entries/${id}`, { status });
          dispatch(changeStatusEntry({ id, status }));
          setIsLoading(false);
          newNotify("Entrada actualizada");
        }
      }
    } catch (error) {
      console.error(error);
      newNotify("Error al cambiar de estado la entrada");
    }
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <Loading isLoading={isLoading} />
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
    </>
  );
};
