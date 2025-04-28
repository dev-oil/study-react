import { useState } from 'react';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
};

const calculateWinner = (squares: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]; // 승리할 수 있는 조합

  for (const v of lines) {
    const [a, b, c] = v;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<(string | null)[]>(() =>
    Array(9).fill(null)
  );

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner ${winner}`
    : `Next Player ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};
