const greeting = () => {
    console.log('hello node!')
}
const add = (a, b) => {
    console.log(a + b)
}

console.log('plik wczytany')

module.exports = {
    greeting,
    add
}