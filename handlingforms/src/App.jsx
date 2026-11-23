import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Practice1 from "./pages/Practice1" ;
import Practice2 from "./pages/Practice2" ;
import Practice3 from "./pages/Practice3" ;
import Timer from "./pages/Timer";




function App() {
  return (
    <>
      <Header />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/practice1" element={<Practice1 />} />
        <Route path="/practice2" element={<Practice2 />} />
        <Route path="/practice3" element={<Practice3 />} />
        <Route path="/timer" element={<Timer />} />

      </Routes>
    </>
  );
}

export default App;