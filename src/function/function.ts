export function getBorrowingRate(note: number) {
    switch (true) {
        case (note >= 0 && note <= 10):
            return 3
        case (note >= 11 && note <= 15):
            return 2.74
        case (note >= 16 && note <= 25):
            return 2.52
        case (note >= 26 && note <= 33):
            return 2.10
        default:
            return 1.85
    }
}