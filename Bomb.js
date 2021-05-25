function Bomb(x, y, map) {
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
      let explosion = new Explosion(xPos, yPos, map)
    }, 3000)
  }

  this.clear = function () {
    setTimeout(function () {
      clearFlame(xPos, yPos, map)
    }, 3500)
  }

  function clearFlame(xPos, yPos, map) {
    xPos = xPos - 25
    yPos = yPos - 25
    let upFlame = yPos / GRID_SIZE - 1
    let downFlame = yPos / GRID_SIZE + 1
    let leftFlame = xPos / GRID_SIZE - 1
    let rightFlame = xPos / GRID_SIZE + 1
  
    map.setPositionValue(xPos / GRID_SIZE, yPos / GRID_SIZE, 0)
    map.setPositionValue(xPos / GRID_SIZE, upFlame, 0)
    map.setPositionValue(xPos / GRID_SIZE, downFlame, 0)
    map.setPositionValue(leftFlame, yPos / GRID_SIZE, 0)
    map.setPositionValue(rightFlame, yPos / GRID_SIZE, 0)
  }
}