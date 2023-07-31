const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
const isPangram = string=> alphabet.every(x=> string.toLowerCase().includes(x))