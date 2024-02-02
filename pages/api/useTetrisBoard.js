import { useReducer } from "react"
import getShape from "./getShape"

export default function useTetrisBoard() {
    const [board, dispatch] = useReducer(
        reducer,
        {
            board: [],
            droppingRow: 0,
            droppingCol: 0,
            color: "I",
            shape: getShape("I"),
        },
        (emptyState) => {
            const state = {
                ...emptyState,
                board: getEmptyBoard(),
            }

            return state
        }
    )

    return [board, dispatch]
}

export function getEmptyBoard() {
    return Array(20)
        .fill(null)
        .map(() => Array(10).fill("empty"))
}

export function getRandomBlock() {
    const blocks = ["T", "O", "L", "J", "I", "S", "Z"]
    const block = blocks[Math.floor(Math.random() * blocks.length)]
    return {
        color: block,
        shape: getShape(block),
    }
}

export function reducer(state, action) {
    switch (action.type) {
        case "start":
            const blockFirst = getRandomBlock()
            return {
                board: getEmptyBoard(),
                droppingRow: 0,
                droppingCol: 3,
                color: blockFirst.color,
                shape: blockFirst.shape,
            }

        case "drop":
            return {
                ...state,
                droppingRow: state.droppingRow + 1,
            }
        case "move":
            return {
                ...state,
                droppingCol: state.droppingCol + action.payload,
            }
        case "commit":
            return action.payload
        default:
            return state
    }
}
