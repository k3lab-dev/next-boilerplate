import { Heading } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Heading level={1} icon="home">
        Home
      </Heading>
    </div>
  );
};

export default Home;
