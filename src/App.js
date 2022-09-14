import { Route, Routes } from "react-router-dom";
import "./font/palatino.ttf";
import Home from "./routes/home/home.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default App;
