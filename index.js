class Game {
    constructor() {
        this.root = document.getElementById('game')
        this.matrix = [
            [0,0,0,2],
            [0,0,0,2],
            [0,0,0,0],
            [0,0,0,0]
        ],
        this.store = 0
        this.buildGame()
    }

    buildGame() {
        this.root.innerHTML = ''
        this.store += 2
        let div = document.createElement('div')
        div.innerHTML = '<h2 align="center">Your Store ` ' + this.store +'</h2>';
        this.root.append(div)
        let content = document.createElement('div')
        content.className = 'border'
        let html = ''
        for(let i=0;i<this.matrix.length;i++) {
            for(let j=0;j<this.matrix[i].length;j++){
                html += `
                    <div class="item">${ this.matrix[i][j] }</div>
                `
            }
        }
        content.innerHTML = html
        this.root.append(content)

    }

    updateBuild() {

        let arr = []
        for(let i=0;i<this.matrix.length;i++){
            for(let j=0;j<this.matrix[i].length;j++){
                if(this.matrix[i][j]==0){
                    arr.push({
                        x:i,
                        y:j
                    })
                }
            }
        }
        let n = parseInt(Math.random() * arr.length);
        if(arr.length > 0) {
            this.matrix[arr[n].x][arr[n].y] = 2
            this.buildGame()
            return 0;
        }
        alert('Game over');
    }

    rightAction() {
        for(let i=0; i<this.matrix.length;i++){
            let n = this.matrix[i].length
            for(let j=1;j<n;j++){
                if(this.matrix[i][j] == this.matrix[i][j-1]) {
                    this.matrix[i][j]  = this.matrix[i][j] + this.matrix[i][j-1]
                    this.matrix[i][j-1] = 0
                }else {
                    if(this.matrix[i][j]==0) {
                        [this.matrix[i][j],this.matrix[i][j-1]] = [this.matrix[i][j-1],this.matrix[i][j]]
                    }
                }
            }
        }
        this.updateBuild()
    }

    leftAction() {
        for(let i=0; i<this.matrix.length;i++){
            let n = this.matrix[i].length
            for(let j=1;j<n;j++){
                if(this.matrix[i][j-1] == this.matrix[i][j]) {
                    this.matrix[i][j-1]  = this.matrix[i][j] + this.matrix[i][j-1]
                    this.matrix[i][j] = 0
                }else {
                    if(this.matrix[i][j-1]==0) {
                        [this.matrix[i][j-1],this.matrix[i][j]] = [this.matrix[i][j],this.matrix[i][j-1]]
                    }
                }
            }
        }
        this.updateBuild()
    }

    topAction() {
        for(let j=0; j<this.matrix.length;j++){
            let n = this.matrix[j].length
            for(let i=1;i<n;i++){
                console.log(j,i , this.matrix[i][j])
                if(this.matrix[i][j] == this.matrix[i-1][j]){
                    this.matrix[i-1][j] = this.matrix[i][j] + this.matrix[i-1][j]
                    this.matrix[i][j] = 0
                }else {
                    if(this.matrix[i-1][j]==0) {
                        [this.matrix[i-1][j],this.matrix[i][j]] = [this.matrix[i][j],this.matrix[i-1][j]]
                    }
                }
            }
        }
        this.updateBuild()
    }

    bottomAction() {
        for(let j=0; j<this.matrix.length;j++){
            let n = this.matrix[j].length
            for(let i=1;i<n;i++){
                if(this.matrix[i][j] == this.matrix[i-1][j]){
                    this.matrix[i][j] = this.matrix[i][j] + this.matrix[i-1][j]
                    this.matrix[i-1][j] = 0
                }else {
                    if(this.matrix[i][j]==0) {
                        [this.matrix[i][j],this.matrix[i-1][j]] = [this.matrix[i-1][j],this.matrix[i][j]]
                    }
                }
            }
        }
        this.updateBuild()
    }
}


let game = new Game()

document.body.onkeydown = (e) => {
    console.log(e.key)
    if(e.key == 'ArrowRight') {
        game.rightAction()
    }else if(e.key == 'ArrowLeft') {
        game.leftAction()
    }else if(e.key == 'ArrowUp') {
        game.topAction()
    }else if(e.key == 'ArrowDown') {
        game.bottomAction()
    }
}

