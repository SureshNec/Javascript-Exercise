import React from 'react';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import BodySec from './Components/BodySec';
import listArry from './assets/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Javascript-Exercise" element={<BodySec />}>
          <Route index element={<h2>Get Started !</h2>} />
          {listArry.map((item, i) => (
            <Route key={i} path={item.to} element={item.tag} />
          ))}

          {/* <Route path="NumberGuess" element={<NumberGuess />} />
          <Route path="Calculator" element={<Calculator />} /> */}
        </Route>
        <Route path="*" element={<h1>No page found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
