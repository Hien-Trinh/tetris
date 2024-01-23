import { useEffect, useState } from "react"
import Board from "../components/Board"

export default function Home() {
    const [board, setBoard] = useState(
        Array(20)
            .fill(null)
            .map(() => Array(10).fill("empty"))
    )

    return (
        <div className="container">
            <h1>Tetris</h1>
            <Board board={board}></Board>
        </div>
    )
}
