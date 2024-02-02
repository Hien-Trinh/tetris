import useTetrisBoard from "./useTetrisBoard"
import useInterval from "./useInterval"
import { useCallback, useState } from "react"

export default function useTetris() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [tick, setTick] = useState(600)
    const [score, setScore] = useState(0)
    const [board, dispatch] = useTetrisBoard()

    const startGame = useCallback(() => {
        dispatch({ type: "start" })
        setIsPlaying(true)
    }, [dispatch])

    const gameLoop = useCallback(() => {
        dispatch({ type: "drop" })
    }, [dispatch])

    useInterval(
        () => {
            gameLoop()
        },
        isPlaying ? tick : null
    )

    const renderedBoard = structuredClone(board.board)

    if (isPlaying) {
        board.shape
            .filter((row) => row.some((cell) => cell))
            .forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    if (cell) {
                        renderedBoard[rowIndex + board.droppingRow][
                            colIndex + board.droppingCol
                        ] = board.color
                    }
                })
            })
    }

    return {
        board: renderedBoard,
        isPlaying,
        startGame,
        score,
    }
}
