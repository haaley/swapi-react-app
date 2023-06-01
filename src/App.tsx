import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
