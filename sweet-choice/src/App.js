import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MypageEdit from "./pages/MypageEdit";
import MypageSweet from "./pages/MypageSweet";
import MypageHistory from "./pages/MypageHistory";
import Search from "./pages/search";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<div>sign</div>} />
        <Route path="/shearch" element={<Search />} />
        <Route path="/mypage" element={<MypageEdit/>}/>
        <Route path="/mypage_sweet" element={<MypageSweet/>}/>
        <Route path="/mypage_history" element={<MypageHistory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
