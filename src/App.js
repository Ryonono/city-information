import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Search from './components/Search.js';
import Result from './components/Result.js';
import Loading from './components/Loading.js';

// このような記述方法で、Reactで複数画面を遷移するアプリを作成できる

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Search />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          {/* <Route path="/*" element={<NotFound />} /> */}
          {/* カスタムの404エラーページ。”/*”を割り当てることで、存在しないパスにアクセスがあった場合は<NotFound/>コンポーネントが表示される */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
