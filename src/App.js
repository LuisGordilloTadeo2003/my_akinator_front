import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Game from './pages/Game';
import Topic from './pages/Topic';
import Result from './pages/Result';

import Header from './components/global/Header';
import Footer from './components/global/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/akinator" element={<Home />} />
        <Route path="/akinator/select-topic" element={<Topic />} />
        <Route path="/akinator/:topic/game" element={<Game />} />
        <Route path="/akinator/:topic/game/result" element={<Result />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
