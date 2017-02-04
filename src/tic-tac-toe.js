class TicTacToe {
    constructor() {
	this.arr = [[],[],[]];
	this.xo = 'x';
	this.winner = null;
	this.fields = 0; 
    }

    getCurrentPlayerSymbol() {
		return this.xo;
    }

    nextTurn(rowIndex, columnIndex) {
		if(this.arr[rowIndex][columnIndex] != null) { return; }
    	this.fields++;
		this.arr[rowIndex][columnIndex] = this.xo;
		if( (this.arr[0][0]&&this.arr[0][0] === this.arr[0][1]&&this.arr[0][0] === this.arr[0][2])
            ||(this.arr[1][0]&&this.arr[1][0] === this.arr[1][1]&&this.arr[1][0] === this.arr[1][2])
            ||(this.arr[2][0]&&this.arr[2][0] === this.arr[2][1]&&this.arr[2][0] === this.arr[2][2])
            ||(this.arr[0][0]&&this.arr[0][0] === this.arr[1][1]&&this.arr[0][0] === this.arr[2][2])
            ||(this.arr[0][2]&&this.arr[0][2] === this.arr[1][1]&&this.arr[0][2] === this.arr[2][0])
            ||(this.arr[0][0]&&this.arr[0][0] === this.arr[1][0]&&this.arr[0][0] === this.arr[2][0]) 
            ||(this.arr[0][1]&&this.arr[0][1] === this.arr[1][1]&&this.arr[0][1] === this.arr[2][1]) 
			||(this.arr[0][2]&&this.arr[0][2] === this.arr[1][2]&&this.arr[0][2] === this.arr[2][2]) )  {this.winner = this.xo;}
    	this.xo = (this.xo == 'x') ? 'o' : 'x';
    }

    isFinished() {
		return (this.isDraw() == true || this.getWinner() != null) ? true : false;
    }

    getWinner() {
		return (this.winner == null) ? null : this.winner;
    }

    noMoreTurns() {
		return (this.fields == 9) ? true : false;
    }

    isDraw() {
		return (this.getWinner() === null && this.noMoreTurns() == true) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
		return (this.arr[rowIndex][colIndex] != null) ? this.arr[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
