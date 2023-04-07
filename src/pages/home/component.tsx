import { Layout } from "@/components/layouts";
import { NextPage } from "next";

const Home: NextPage<any> = (props) => {
  return (
    <Layout title="Account">
      <h1 className="text-center text-7xl">Hola mundo</h1>
    </Layout>
  );
};

export default Home;
