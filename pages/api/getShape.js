export default function getShape(shape) {
    switch (shape) {
        case "T":
            return [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0],
            ]
        case "O":
            return [
                [1, 1],
                [1, 1],
            ]
        case "L":
            return [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0],
            ]
        case "J":
            return [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ]
        case "I":
            return [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        case "S":
            return [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0],
            ]
        case "Z":
            return [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0],
            ]
        default:
            return []
    }
}
