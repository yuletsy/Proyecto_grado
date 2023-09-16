import { Box } from "@mui/material";
export const Results = () => {

  // useEffect(() => {
  //   dispatch(ResultUser()).then((res: any) => {
  //     setResult(res);
  //   });
  // }, [setResult, dispatch]);
  return (
    <Box sx={{ pt: "4%" }}>
      <h1>Results</h1>
      {/* {results.map((item) => (<h3 key={item.idActividades}>{item.nombre}</h3>))} */}
    </Box>
  );
};
