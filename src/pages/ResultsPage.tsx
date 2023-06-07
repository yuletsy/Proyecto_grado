import React, { useEffect , useState} from "react";
import { Box } from "@mui/material";
import { useAppDispatch } from "../app/store/hooks";
import { ResultUser } from "../app/actions/ResultAction";
export const Results = () => {
  const dispatch = useAppDispatch();
  const [results, setResult] = useState<
    { idActividades: number; nombre: string }[]
  >([]);

  useEffect(() => {
    dispatch(ResultUser()).then((res: any) => {
      setResult(res);
    });
  }, [setResult, dispatch]);
  return (
    <Box sx={{ pt: "4%" }}>
      <h1>Results</h1>
      {results.map((item) => (<h3 key={item.idActividades}>{item.nombre}</h3>))}
    </Box>
  );
};
