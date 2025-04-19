import React, { useState } from 'react';

const TicTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(board)

    let status = winner ? `Winner : ${winner}` : `It's ${isXNext ? "X" : "0"} turn`;

    let handleClick = (index) => {
        if(board[index] || winner) return
        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext)
    }
    console.log(board)

    return (
        <>
            <div className='game'>
                <div className="game-container">
                    <h1 className='game-title'>Tic Tac Toe</h1>
                    <div className="game-status">{status}</div>
                    <div className="game-board">
                        {
                            board.map((item,index) => (
                                <button key={index} className='square' onClick={()=>handleClick(index)}>{item}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
function calculateWinner(items){
    const winnerCombinationS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for( let i = 0; i < winnerCombinationS.length; i++){
        const [a, b,c] = winnerCombinationS[i]

        if( items[a] && items[a] === items[b] && items[a] === items[c]){
            return items[a]
        }
        return items.includes(null) ? null : "Draw";
    }
}

export default TicTacToe;