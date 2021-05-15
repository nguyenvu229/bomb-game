const WALL = 1
const BRICK = 2
const BOMB = 3
const FLAME = 4
const GRID_SIZE = 50

function Game() {
  let map = new GameMap()
  let player1 = new Player(50, 50, map)
  let player2 = new Player(100, 50, map)

  this.getMap = function () {
    return map
  }

  this.getPlayer1 = function () {
    return player1
  }

  this.getPlayer2 = function () {
    return player2
  }

  document.addEventListener('keydown', function (e) {
    let keyCode = e.code

    if (keyCode == "ArrowUp") {
      player1.moveUp()
    }
    else if (keyCode == "ArrowDown") {
      player1.moveDown()
    }
    else if (keyCode == "ArrowLeft") {
      player1.moveLeft()
    }
    else if (keyCode == "ArrowRight") {
      player1.moveRight()
    }
    else if (keyCode == "Space") {
      player1.setBomb()
    } 
    
    else if (keyCode == "KeyW") {
      player2.moveUp()
    }
    else if (keyCode == "KeyS") {
      player2.moveDown()
    }
    else if (keyCode == "KeyA") {
      player2.moveLeft()
    }
    else if (keyCode == "KeyD") {
      player2.moveRight()
    }
    else if (keyCode == "KeyJ") {
      player2.setBomb()
    }
  })
}



