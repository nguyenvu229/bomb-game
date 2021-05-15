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