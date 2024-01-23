import { useState } from "react"
import Cell from "./Cell"

export default function Board({ board }) {
    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div className="row" key={`${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            type={cell}
                        ></Cell>
                    ))}
                </div>
            ))}
        </div>
    )
}
