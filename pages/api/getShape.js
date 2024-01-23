export default getShape = (shape) => {
    switch (shape) {
        case "T":
            return [
                [0, 0, 0],
                ["T", "T", "T"],
                [0, "T", 0],
            ]
        case "O":
            return [
                ["O", "O"],
                ["O", "O"],
            ]
        case "L":
            return [
                [0, "L", 0],
                [0, "L", 0],
                [0, "L", "L"],
            ]
        case "J":
            return [
                [0, "J", 0],
                [0, "J", 0],
                ["J", "J", 0],
            ]
        case "I":
            return [
                [0, "I", 0, 0],
                [0, "I", 0, 0],
                [0, "I", 0, 0],
                [0, "I", 0, 0],
            ]
        case "S":
            return [
                [0, "S", "S"],
                ["S", "S", 0],
                [0, 0, 0],
            ]
        case "Z":
            return [
                ["Z", "Z", 0],
                [0, "Z", "Z"],
                [0, 0, 0],
            ]
        default:
            return []
    }
}
