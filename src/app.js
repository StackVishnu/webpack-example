import React, { Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

const App = () => (
  <div>
    <h1>Hello, React with Webpacks!</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  </div>
);

export default App;
