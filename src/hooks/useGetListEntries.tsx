import { TEntry } from "@/types";
import { useSelector } from "react-redux";

export const useGetListEntries = () => {
  const store = useSelector((state) => state) as { entries: TEntry[] };

  const listEntriesInProgress = store.entries.filter(
    (entry) => entry.status === "in-progress"
  );
  const listEntriesPending = store.entries.filter(
    (entry) => entry.status === "pending"
  );
  const listEntriesFinished = store.entries.filter(
    (entry) => entry.status === "finished"
  );

  return {
    listEntriesInProgress,
    listEntriesPending,
    listEntriesFinished,
  };
};
