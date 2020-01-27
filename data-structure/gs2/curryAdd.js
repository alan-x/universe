function add(...number) {
    if (number.length > 1) return number.reduce((r1, r2) => r1 + r2, 0)
    return (num2) => number[0] + num2
}

module.exports = add
