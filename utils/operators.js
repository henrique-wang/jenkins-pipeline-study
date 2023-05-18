const sum = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw TypeError();
    }
    return a + b;
};

module.exports = {
    sum
}