import { lazy, Suspense } from "react";
import Loading from "./pages/Loadig.js";
const HomePage = lazy(() => import("./pages/HomePage.js"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </>
  );
}

export default App;
