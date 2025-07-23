import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import LogoLoader from "./components/ui/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <LogoLoader />
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
