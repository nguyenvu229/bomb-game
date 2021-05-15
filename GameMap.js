function GameMap() {
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

  this.getMapMatrix = function () {
    return map
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