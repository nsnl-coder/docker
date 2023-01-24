import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fib = () => {
  const [state, setState] = useState({
    seenIndexes: [],
    values: {},
    index: '',
  });

  const fetchValues = async () => {
    const res = await axios.get('/api/values/current');
    setState((prev) => ({ ...prev, values: res.data }));
  };

  const fetchIndexes = async () => {
    const res = await axios.get('/api/values/all');
    setState((prev) => ({ ...prev, seenIndexes: res.data }));
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/values', {
      index: state.index,
    });

    setState((prev) => ({ ...prev, index: '' }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input
          type="text"
          value={state.index}
          onChange={(e) =>
            setState((prev) => ({ ...prev, index: e.target.value }))
          }
        />
        <button>submit</button>
        <h3>Indexes I have seen </h3>
        {state.seenIndexes.map(({ number }) => number).join(', ')}
        <h3>Calculated value</h3>

        <ul>
          {Object.keys(state.values).map((key) => (
            <li key={key}>
              {' '}
              for index {key}, I calculated {state.values[key]}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Fib;
