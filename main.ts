function deepRecursion (n: number) {
    if (n == 0) {
        return
    }
    deepRecursion(n - 1)
}
deepRecursion(10000)
