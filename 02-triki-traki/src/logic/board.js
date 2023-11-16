import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // Se valida si hay un ganador haciendo uso de las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // Devuelve X u O
      }
    }
    // Si no hay ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null) // Significa que si todos los Square tienen un valor diferente a null entonces termina el juego y se valida si hay un ganador
  }