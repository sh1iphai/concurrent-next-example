import { Suspense } from "react";
import { SuspendMessage } from "./SuspendMessage";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspendMessage />
    </Suspense>
  );
};

export default Home;
