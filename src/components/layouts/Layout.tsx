//next
import Head from "next/head";
import { NextPage } from "next";

//next-ui
import {
  Grid,
  Container,
  Link,
  Text,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
// import {Navbar} from '@components/ui'
import { Navbar } from "@/components/ui";

// types
import { LayoutProps } from "./types";

export const Layout: NextPage<LayoutProps> = ({ title, children }) => {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Grid css={{ flexFlow: 1 }}>
      <Head>
        <title> {title} </title>
      </Head>

      {/* Navbar */}
      <Navbar />

      <Container lg>{children}</Container>
    </Grid>
  );
};
