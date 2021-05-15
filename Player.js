function Player(x, y, map) {
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

  function isBarrierPosition(xPos, yPos) {
    let x = xPos / 50
    let y = yPos / 50
  
    if (map.getPositionValue(x, y) != 0 && map.getPositionValue(x, y) != 4) {
      return true
    }
    return false
  }
}
