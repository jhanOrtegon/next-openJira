import { NextPage } from "next";
import { THomePage } from "./types";
import { Layout } from "@/components/layouts";
import { Grid } from "@nextui-org/react";
import { Column, ItemColumn, Loading, NewEntry } from "@/components/ui/";
import { useForm, useGetListEntries, useGetStore } from "@/hooks";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { loadEntries, newEntry } from "@/redux";
import { getUid, newNotify } from "@/utils";
import { entriesService } from "@/services";
import { TEntry } from "@/types";

export const HomePage: NextPage<THomePage> = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const { listEntriesFinished, listEntriesInProgress, listEntriesPending } =
    useGetListEntries();

  const [showModalNewEntry, setShowModalNewEntry] = useState(false);
  const [{ color, helperColor, helperText }, setTextAreaStyle] = useState({
    helperColor: "default",
    color: "default",
    helperText: "",
  });

  const onShowNewEntry = () => {
    setShowModalNewEntry((state) => !state);
  };

  const onCloseNewEntry = () => {
    setShowModalNewEntry(false);
    onClear();
  };

  const { onChange, onClear, dataForm } = useForm({
    description: "",
  });

  const onSave = async () => {
    try {
      setIsLoading(true);
      const { data } = await entriesService.post("/entries", {
        description: dataForm.description,
      });
      newNotify("Nueva nota agregada");
      setIsLoading(false);
      dispatch(newEntry({ ...data }));
    } catch (error) {
      console.error(error);
    }
  };

  const getEntries = async () => {
    console.log("entro");
    try {
      const { data } = await entriesService.get<TEntry[]>("/entries");
      dispatch(loadEntries(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (dataForm.description.length < 1) {
      setTextAreaStyle({
        color: "error",
        helperColor: "error",
        helperText: "Digite por lo menos un carácter",
      });
    } else {
      setTextAreaStyle({
        color: "default",
        helperColor: "default",
        helperText: "",
      });
    }
  }, [dataForm.description]);

  useEffect(() => {
    getEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />

      <Layout title="home">
        <Grid className="flex gap-12">
          <Column title="Pendientes" iconAdd onShowNewEntry={onShowNewEntry}>
            {listEntriesPending?.map((itemPending) => (
              <ItemColumn
                key={itemPending._id}
                id={itemPending._id}
                note={itemPending.description}
                date={"hace 30 minutos"}
              />
            ))}
          </Column>

          <Column title="En progreso">
            {listEntriesInProgress?.map((itemInProgress) => (
              <ItemColumn
                key={itemInProgress._id}
                id={itemInProgress._id}
                note={itemInProgress.description}
                date={"hace 30 minutos"}
              />
            ))}
          </Column>

          <Column title="Completadas">
            {listEntriesFinished?.map((itemFinished) => (
              <ItemColumn
                id={itemFinished._id}
                key={itemFinished._id}
                note={itemFinished.description}
                date={"hace 30 minutos"}
              />
            ))}
          </Column>
        </Grid>

        <NewEntry
          color={color}
          description={dataForm.description}
          helperColor={helperColor}
          helperText={helperText}
          onCloseModal={onCloseNewEntry}
          onSave={onSave}
          showModal={showModalNewEntry}
          onChangeTextarea={(e: any) => {
            onChange(e);
          }}
        />
      </Layout>
    </>
  );
};

{
  /*  */
}
