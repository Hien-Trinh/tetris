import useTetris from "./api/useTetris"
import { useEffect, useState } from "react"
import Board from "../components/Board"

export default function Home() {
    const { board, isPlaying, startGame, score } = useTetris()

    return (
        <div className="container">
            <h1>Tetris</h1>
            <Board board={board} />
            <div className="controls">
                <button onClick={startGame}>
                    {isPlaying ? "Pause" : "Start"}
                </button>
                <p>Score: {score}</p>
            </div>
        </div>
    )
}
