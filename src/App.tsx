import { useState } from "react";
import MandalaIntro from "./components/intro/MandalaIntro";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [entered, setEntered] = useState(false);

  return entered ? (
    <AppRoutes />
  ) : (
    <MandalaIntro onEnter={() => setEntered(true)} />
  );
}

export default App;
