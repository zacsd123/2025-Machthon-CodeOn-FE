import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MypageEdit from "./pages/MypageEdit";
import MypageSweet from "./pages/MypageSweet";
import MypageHistory from "./pages/MypageHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage_edit" element={<MypageEdit/>}/>
        <Route path="/mypage_sweet" element={<MypageSweet/>}/>
        <Route path="/mypage_history" element={<MypageHistory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
