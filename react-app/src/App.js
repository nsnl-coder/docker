import logo from './logo.svg';
import './App.css';
import OtherPage from './OtherPage';
import Fib from './Fib';

import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Pages</Link>
        </header>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
