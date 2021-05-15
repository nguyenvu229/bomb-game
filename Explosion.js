function Explosion(xPos, yPos, map) {
  let x = xPos - 25
  let y = yPos - 25
  let upFlame = y / 50 - 1
  let downFlame = y / 50 + 1
  let leftFlame = x / 50 - 1
  let rightFlame = x / 50 + 1

  map.setPositionValue(x / 50, y / 50, FLAME)
  map.setPositionValue(x / 50, upFlame, FLAME)
  map.setPositionValue(x / 50, downFlame, FLAME)
  map.setPositionValue(leftFlame, y / 50, FLAME)
  map.setPositionValue(rightFlame, y / 50, FLAME)
}