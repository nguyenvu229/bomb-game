function Player(x, y, map) {
  let xPos = x
  let yPos = y

  this.getX = function () {
    return xPos
  }

  this.getY = function () {
    return yPos
  }

  this.resetPlayer = function(x, y) {
    xPos = x
    yPos = y
  }

  this.moveLeft = function () {
    let isOnBorder = (xPos == 0)
    let newXPos = xPos - 50

    if (!isOnBorder && isBarrierPosition(newXPos, yPos) == false) {
      xPos -= 50
    }
  }

  this.moveRight = function () {
    let isOnBorder = (xPos == 500 - 50)
    let newXPos = xPos + 50

    if (!isOnBorder && isBarrierPosition(newXPos, yPos) == false) {
      xPos += 50
    }
  }

  this.moveUp = function () {
    let isOnBorder = (yPos == 0)
    let newYPos = yPos - 50

    if (!isOnBorder && isBarrierPosition(xPos, newYPos) == false) {
      yPos -= 50
    }
  }

  this.moveDown = function () {
    let isOnBorder = (yPos == 500 - 50)
    let newYPos = yPos + 50

    if (!isOnBorder && isBarrierPosition(xPos, newYPos) == false) {
      yPos += 50
    }
  }

  this.setBomb = function () {
    let xBomb = xPos / GRID_SIZE
    let yBomb = yPos / GRID_SIZE

    map.setPositionValue(xBomb, yBomb, 3)
  }

  function isBarrierPosition(xPos, yPos) {
    let x = xPos / GRID_SIZE
    let y = yPos / GRID_SIZE

    if (map.getPositionValue(x, y) == 1 || 
        map.getPositionValue(x, y) == 2 || 
        map.getPositionValue(x, y) == 3){
      return true
    }
    return false
  }
}
