import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MypageEdit from "./pages/MypageEdit";
import MypageSweet from "./pages/MypageSweet";
import MypageHistory from "./pages/MypageHistory";
import Search from "./pages/search";
import Mainpage from "./pages/Mainpage";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Info from "./pages/Info";
import Header from "./components/Header";
import { createContext, useState } from "react";

export const SCFunctionContext = createContext()
export const SCValueageContext = createContext()

function App() {

    const [pageNum, setPageNum] = useState("")

  return (
    <SCFunctionContext.Provider value={{setPageNum}}>
      <SCValueageContext.Provider value={{pageNum}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/search" element={<Search />} />
            <Route path="/mypage_edit" element={<MypageEdit/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/shearch" element={<Search />} />
            <Route path="/info" element={<Info />} />
            <Route path="/mypage" element={<MypageEdit/>}/>
            <Route path="/mypage_sweet" element={<MypageSweet/>}/>
            <Route path="/mypage_history" element={<MypageHistory/>}/>
          </Routes>
        </BrowserRouter>
      </SCValueageContext.Provider>
    </SCFunctionContext.Provider>
  );
}

export default App;
