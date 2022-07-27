const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const espString = minhaString.trim()

console.log(minhaString.length)

console.log(espString.length)

const novaString = espString.replaceAll("________","sticioso")

console.log(novaString)