import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import PostDetail from "./pages/postDetail/PostDetail";
import Mypage from "./pages/mypage/Mypage";
import Signup from "./pages/signup/Signup";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/detail" element={<PostDetail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default AppRouter;
