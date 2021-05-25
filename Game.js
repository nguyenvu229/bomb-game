const GRASS = 0
const WALL = 1
const BRICK = 2
const BOMB = 3
const FLAME = 4
const GRID_SIZE = 50
const PLAYER1 = 9
const PLAYER2 = 10


function Game() {
  let map = new GameMap()
  let player1 = new Player(50, 50, map)
  let player2 = new Player(450, 50, map)

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

  this.checkPlayersInFlame = function () {
    let x1 = player1.getX() / GRID_SIZE
    let y1 = player1.getY() / GRID_SIZE

    let x2 = player2.getX() / GRID_SIZE
    let y2 = player2.getY() / GRID_SIZE

    let Player1InFlame = (map.getPositionValue(x1, y1) == FLAME)
    let Player2InFlame = (map.getPositionValue(x2, y2) == FLAME)

    if(Player1InFlame == true || Player2InFlame == true) {
      resetGame()
    }
  }

  function resetGame () {
    map.resetMap()
    player1.resetPlayer(50, 50)
    player2.resetPlayer(450, 50)
  }
}



