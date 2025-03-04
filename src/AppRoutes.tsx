import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LayoutDefault } from "./pages/LayoutDefault";
import { Post } from "./pages/Post";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:number" element={<Post />} />
      </Route>
    </Routes>
  );
}
