import './App.css';
import OtherPage from './OtherPage';
import Fib from './Fib';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Message from nsnhatlong to the world</h1>
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
