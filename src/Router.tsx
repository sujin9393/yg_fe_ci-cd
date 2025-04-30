import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import PostDetail from "./pages/postDetail/PostDetail";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/detail" element={<PostDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
