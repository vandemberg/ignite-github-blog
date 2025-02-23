import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LayoutDefault } from "./pages/LayoutDefault";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
