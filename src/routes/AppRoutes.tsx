import { HelloWorld } from "@/pages/HelloWorld";
import { Routes, Route } from "react-router";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
    </Routes>
  );
};
