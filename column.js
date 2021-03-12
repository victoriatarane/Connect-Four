export class Column {
    constructor(rows) {
        this.rows = [null, null, null, null, null, null];
    }                                             //2

    add(playerNum) {
        for (let i = this.rows.length - 1; i >= 0; i--){
            if (this.rows[i] === null){
                this.rows[i] = playerNum;
                break;
            };
        }
    }

    getTokenAt(rowIdx) {
        return this.rows[rowIdx];
    }

    isFull() {
        for (let i = 0; i < this.rows.length; i++) {
            if(this.rows[i] === null) {
                return false;
            }
        }
        return true;
    }
}