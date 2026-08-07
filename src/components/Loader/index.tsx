// components/Loader/index.tsx

import { CircularProgress } from "@mui/material";
import IMCBox from "../IMCBox";

const Loader = () => {
  return (
    <IMCBox
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
      }}
    >
      <CircularProgress />
    </IMCBox>
  );
};

export default Loader;
