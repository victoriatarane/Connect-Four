import { Column } from './column.js';

export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`
    }

    playInColumn(idx){      
        this.columns[idx].add(this.currentPlayer);
        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
    getTokenAt(rowIdx, colIdx){
        //console.log(this.columns[colIdx].getTokenAt(rowIdx))
        return this.columns[colIdx].getTokenAt(rowIdx);
    }

    isColumnFull(colIdx) {
        return this.columns[colIdx].isFull()
    }
}

