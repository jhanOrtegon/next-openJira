import { TStore } from "@/redux/";
import { useStore } from "react-redux";

export const useGetStore = () => {
  const store = useStore();

  return { ...(store.getState() as TStore) };
};
