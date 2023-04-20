import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { TColumnOpenJira } from "./types";
import { PaperPlus } from "react-iconly";

export const Column: NextPage<TColumnOpenJira> = ({
  children,
  title,
  iconAdd,
  onShowNewEntry,
}) => {
  return (
    <Card variant="bordered" css={{ height: "85vh" }}>
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
