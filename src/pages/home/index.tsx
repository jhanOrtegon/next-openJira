import { GetStaticProps } from "next";
import { HomePage } from "./component";

const index = (props: any) => {
  const data = {
    name: "jhan carlos",
    lastName: "Ortegon",
    age: 25,
    account: props.account,
  };

  const onClickData = () => {
    console.log({ onClickData });
  };

  return <HomePage data={data} onClickData={onClickData} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      account: "jhan carlos",
    },
  };
};

export default index;
