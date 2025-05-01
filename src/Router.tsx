import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import PostDetail from "./pages/postDetail/PostDetail";
import Mypage from "./pages/mypage/Mypage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/detail" element={<PostDetail />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
