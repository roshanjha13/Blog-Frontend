import "./App.css";
import { Layout, Post } from "./components";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={"/login"} element={<div>Login page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
