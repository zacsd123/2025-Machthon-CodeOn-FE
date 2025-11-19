import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MypageEdit from "./pages/MypageEdit";
import MypageSweet from "./pages/MypageSweet";
import MypageHistory from "./pages/MypageHistory";
import Search from "./pages/search";
import Mainpage from "./pages/Mainpage";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<div>signin</div>} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage_edit" element={<MypageEdit/>}/>
        <Route path="/mypage_sweet" element={<MypageSweet/>}/>
        <Route path="/mypage_history" element={<MypageHistory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
