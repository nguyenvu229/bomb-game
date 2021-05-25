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

  function Explosion(xPos, yPos, map) {
    let x = xPos / 50
    let y = yPos / 50
    let upFlame = y - 1
    let downFlame = y + 1
    let leftFlame = x - 1
    let rightFlame = x + 1
  
    map.setPositionValue(x , y , FLAME)
    map.setPositionValue(x , upFlame, FLAME)
    map.setPositionValue(x , downFlame, FLAME)
    map.setPositionValue(leftFlame, y , FLAME)
    map.setPositionValue(rightFlame, y , FLAME)
  }
}