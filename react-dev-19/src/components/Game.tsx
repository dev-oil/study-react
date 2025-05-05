import { useState } from 'react';

type Player = 'X' | 'O' | null;

type SquareProps = {
  value: Player;
  onSquareClick: () => void;
};

type BoardProps = {
  xIsNext: boolean;
  squares: Player[];
  onPlay: (nextSquares: Player[]) => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
};

const calculateWinner = (squares: Player[]): Player => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `🔥 Winner ${winner} 축하합니다!`
    : `Next Player ${xIsNext ? 'X' : 'O'}`;

  const renderSquare = (i: number) => (
    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
  );

  return (
    <>
      <div>{status}</div>
      {[0, 3, 6].map((rowStart) => (
        <div className='board-row' key={rowStart}>
          {Array.from({ length: 3 }, (_, j) => renderSquare(rowStart + j))}
        </div>
      ))}
    </>
  );
};

export const Game = () => {
  const [history, setHistory] = useState<Player[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares: Player[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  };

  const moves = history.map((_, move) => {
    const description = move === 0 ? 'Go to game start' : `Go to move #${move}`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
