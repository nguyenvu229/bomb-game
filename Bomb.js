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
}