class TicTacToe {
    currentPlayer = 'x'
    playingField = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]

    getCurrentPlayerSymbol() {
        return this.currentPlayer//игрок который делает ход, напо просто вывести символ игрока
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playingField[rowIndex][columnIndex] === null) {
            this.playingField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        let stroke = this.noMoreTurns();
        let winner = this.getWinner()
        return stroke === true || winner !== null;
    }

    getWinner() {
        if (this.playingField[0][0] === this.playingField[1][1] && this.playingField[0][0] === this.playingField[2][2]) {
            return this.playingField[0][0]
        }

        if (this.playingField[0][2] === this.playingField[1][1] && this.playingField[0][2] === this.playingField[2][0]) {
            return this.playingField[0][2]
        }

        for (let i = 0; i < 3; i++) {
            if (this.playingField[i][0] === this.playingField[i][1] && this.playingField[i][0] === this.playingField[i][2]) {
                return this.playingField[i][0]
            }
        }

        for (let i = 0; i < 3; i++) {
            if (this.playingField[0][i] === this.playingField[1][i] && this.playingField[0][i] === this.playingField[2][i]) {
                return this.playingField[0][i]
            }
        }
        return null
    }

    noMoreTurns() {
        let array = []
        for (let i = 0; i < this.playingField.length; i++) {
            let currentElement = this.playingField[i]
            if (!currentElement.includes(null)) {
                array.push(true)
            } else {
                return false
            }
        }
        return array.includes(true)
    }

    isDraw() {
        let noMoves = this.noMoreTurns();
        let noWinner = this.getWinner();
        return !(noWinner !== null || noMoves !== true);
    }

    getFieldValue(rowIndex, colIndex) {
        //проверка на валидность значений аргументов
        return this.playingField[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
