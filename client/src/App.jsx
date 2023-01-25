import './App.css';
import OtherPage from './OtherPage';
import Fib from './Fib';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Docker is a piece of cake</h1>
        <h3>I finally deploy my first kuberties to the cloud</h3>
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Pages</Link>
        </header>
        <Routes>
          <Route path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
