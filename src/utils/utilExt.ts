export function sleep(sec = 0) {
    return new Promise((resolve) => setTimeout(resolve, sec))
}
