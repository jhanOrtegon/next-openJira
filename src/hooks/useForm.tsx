import { useState } from "react";

type TUseForm = {
  onChange: (e: any) => void;
  onClear: () => void;
  dataForm: object;
};

export const useForm = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const onChange = ({ target }: any) => {
    setState((state: any) => ({ ...state, [target.name]: target.value }));
  };

  const onClear = () => {
    setState(initialState);
  };

  return {
    dataForm: state,
    onChange,
    onClear,
  };
};
