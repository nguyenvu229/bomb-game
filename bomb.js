let canvas = document.getElementById("board")
let context = canvas.getContext("2d")

const WALL = 1
const BRICK = 2
const BOMB = 3
const FLAME = 4
const GRID_SIZE = 50

let bombList = []

let map = new Map()
let player = new Player(50, 50)

function Game() {
  function redrawGame() {
    context.clearRect(0, 0, 500, 500)
    map.drawMap()
    draw(player)

    window.requestAnimationFrame(redrawGame)
  }
  redrawGame()
}

let game = new Game()

function Map() {
  let map = [
    [1, 0, 1, 0, 1, 0, 1, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
    [1, 2, 1, 0, 1, 2, 1, 0, 1, 0],
    [0, 2, 2, 0, 0, 2, 0, 0, 2, 2],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [2, 0, 0, 0, 0, 0, 2, 2, 0, 0],
    [1, 2, 1, 0, 1, 0, 1, 2, 1, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 2, 1, 0, 1, 0],
    [0, 2, 2, 0, 0, 2, 0, 0, 0, 2]
  ]

  this.drawMap = function () {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (map[i][j] == WALL) {
          let barrier = new Barrier(j * 50, i * 50, WALL)
          drawBarrier(barrier)
        } else if (map[i][j] == BRICK) {
          let barrier = new Barrier(j * 50, i * 50, BRICK)
          drawBarrier(barrier)
        } else if (map[i][j] == BOMB) {
          let bomb = new Bomb(j * 50 + 25, i * 50 + 25)
          drawBomb(bomb)
          bomb.explode()
        } else if (map[i][j] == FLAME) {
          let flame = new Flame(j * 50, i * 50)
          drawFlame(flame)
        }
      }
    }
  }

  this.getPositionValue = function (x, y) {
    return map[y][x]
  }

  this.setPositionValue = function (x, y, value) {
    if (map[y][x] != WALL) {
      map[y][x] = value
    }
  }
}

function Barrier(x, y, value) {
  let xPos = x
  let yPos = y
  let type = value

  this.getX = function () {
    return xPos
  }

  this.getY = function () {
    return yPos
  }

  this.getType = function () {
    return type
  }
}

function Bomb(x, y) {
  let xPos = x
  let yPos = y
  let radius = 25

  this.getX = function () {
    return xPos
  }

  this.getY = function () {
    return yPos
  }

  this.getRadius = function () {
    return radius
  }

  this.explode = function () {
    setTimeout(function () {
      let explosion = new Explosion(xPos, yPos)
    }, 3000)
  }
}

function Flame(x, y) {
  let xPos = x
  let yPos = y

  this.getX = function () {
    return xPos
  }

  this.getY = function () {
    return yPos
  }
}

function Player(x, y) {
  let xPos = x
  let yPos = y

  this.getX = function () {
    return xPos
  }

  this.getY = function () {
    return yPos
  }

  this.moveLeft = function () {
    let isOnBorder = (xPos == 0)
    let newXPos = xPos - 50

    if (!isOnBorder && !isBarrierPosition(newXPos, yPos)) {
      xPos -= 50
    }
  }

  this.moveRight = function () {
    let isOnBorder = (xPos == 500 - 50)
    let newXPos = xPos + 50

    if (!isOnBorder && !isBarrierPosition(newXPos, yPos)) {
      xPos += 50
    }
  }

  this.moveUp = function () {
    let isOnBorder = (yPos == 0)
    let newYPos = yPos - 50

    if (!isOnBorder && !isBarrierPosition(xPos, newYPos)) {
      yPos -= 50
    }
  }

  this.moveDown = function () {
    let isOnBorder = (yPos == 500 - 50)
    let newYPos = yPos + 50

    if (!isOnBorder && !isBarrierPosition(xPos, newYPos)) {
      yPos += 50
    }
  }

  this.setBomb = function () {
    let xBomb = xPos / 50
    let yBomb = yPos / 50

    map.setPositionValue(xBomb, yBomb, 3)
  }

  this.die = function () {

  }
}

function drawBomb(bomb) {
  context.beginPath()
  context.fillStyle = "black"
  context.arc(bomb.getX(), bomb.getY(), bomb.getRadius(), 0, 2 * Math.PI)
  context.fill();
}

function drawBarrier(barrier) {
  context.beginPath()
  if (barrier.getType() == WALL) {
    context.fillStyle = "lightgrey"
  } else if (barrier.getType() == BRICK) {
    context.fillStyle = "brown"
  }
  context.fillRect(barrier.getX(), barrier.getY(), GRID_SIZE, GRID_SIZE);
}

function draw(player) {
  context.beginPath()
  context.fillStyle = "darkorange"
  context.fillRect(player.getX(), player.getY(), GRID_SIZE, GRID_SIZE);
}

document.addEventListener('keydown', function (e) {
  let keyCode = e.code

  if (keyCode == "ArrowUp") {
    player.moveUp()
  }
  else if (keyCode == "ArrowDown") {
    player.moveDown()
  }
  else if (keyCode == "ArrowLeft") {
    player.moveLeft()
  }
  else if (keyCode == "ArrowRight") {
    player.moveRight()
  }
  else if (keyCode == "Space") {
    player.setBomb()
  }
})

function isBarrierPosition(xPos, yPos) {
  let x = xPos / 50
  let y = yPos / 50

  if (map.getPositionValue(x, y) != 0 && map.getPositionValue(x, y) != 4) {
    return true
  }
  return false
}

function Explosion(xPos, yPos) {
  xPos = xPos - 25
  yPos = yPos - 25
  let upFlame = yPos / 50 - 1
  let downFlame = yPos / 50 + 1
  let leftFlame = xPos / 50 - 1
  let rightFlame = xPos / 50 + 1

  map.setPositionValue(xPos / 50, yPos / 50, FLAME)
  map.setPositionValue(xPos / 50, upFlame, FLAME)
  map.setPositionValue(xPos / 50, downFlame, FLAME)
  map.setPositionValue(leftFlame, yPos / 50, FLAME)
  map.setPositionValue(rightFlame, yPos / 50, FLAME)

  if(map.getPositionValue(player.getX() / 50, player.getY() / 50) == FLAME) {

  }
}

function clearFlame(xPos, yPos) {
  xPos = xPos - 25
  yPos = yPos - 25
  let upFlame = yPos / 50 - 1
  let downFlame = yPos / 50 + 1
  let leftFlame = xPos / 50 - 1
  let rightFlame = xPos / 50 + 1

  map.setPositionValue(xPos / 50, yPos / 50, 0)
  map.setPositionValue(xPos / 50, upFlame, 0)
  map.setPositionValue(xPos / 50, downFlame, 0)
  map.setPositionValue(leftFlame, yPos / 50, 0)
  map.setPositionValue(rightFlame, yPos / 50, 0)
}

function deletePlayer() {
  
}

function drawFlame(flame) {
  context.beginPath()
  context.fillStyle = "yellow"
  context.fillRect(flame.getX(), flame.getY(), GRID_SIZE, GRID_SIZE);
}

