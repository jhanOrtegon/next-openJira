import { Grid, Loading as IconLoading } from "@nextui-org/react";
import { NextPage } from "next";

export const Loading: NextPage<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Grid
          css={{
            position: "absolute",
            top: "0",
            zIndex: "9999",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(10px)",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconLoading type="points" size="xl" color={"primary"} />
        </Grid>
      )}
    </>
  );
};
