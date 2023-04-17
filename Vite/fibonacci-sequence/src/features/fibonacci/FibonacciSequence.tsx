import React, { useState } from 'react'
// import './fib.scss';

const FibonacciSequence: React.FC = () => {
    const [number, setNunber] = useState<number>(0);
    const [sequence, setSequence] = useState<number[]>([]);

    const generateSequence = () => {
        let fib = [0,1];
        while (fib[fib.length - 1] < number) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
          }
        
        setSequence(fib.slice(1));
    }; 
  return (
    <div>
        <input type="number" value={number} onChange={(e) => setNunber(parseInt(e.target.value))} />
        <button onClick={generateSequence}>Generate Fibonacci Sequence</button>
        <ul>
            {sequence.map((num) => (
                <li key={num}>{num}</li>
            ))};
        </ul>
    </div>
  );
};

export default FibonacciSequence;