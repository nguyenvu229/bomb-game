function GameMap() {
  let map = [
    [1, 0, 1, 2, 1, 0, 1, 2, 1, 0],
    [0, 0, 0, 2, 0, 0, 2, 2, 0, 0],
    [1, 2, 1, 0, 1, 2, 1, 0, 1, 0],
    [0, 2, 2, 0, 0, 2, 0, 0, 2, 2],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [2, 0, 2, 0, 2, 0, 2, 2, 0, 0],
    [1, 2, 1, 2, 1, 0, 1, 2, 1, 2],
    [0, 0, 0, 2, 0, 2, 0, 0, 0, 2],
    [1, 0, 1, 2, 1, 2, 1, 0, 1, 0],
    [0, 2, 2, 0, 0, 2, 0, 0, 0, 2]
  ]

  let mapReset = [
    [1, 0, 1, 2, 1, 0, 1, 2, 1, 0],
    [0, 0, 0, 2, 0, 0, 2, 2, 0, 0],
    [1, 2, 1, 0, 1, 2, 1, 0, 1, 0],
    [0, 2, 2, 0, 0, 2, 0, 0, 2, 2],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [2, 0, 2, 0, 2, 0, 2, 2, 0, 0],
    [1, 2, 1, 2, 1, 0, 1, 2, 1, 2],
    [0, 0, 0, 2, 0, 2, 0, 0, 0, 2],
    [1, 0, 1, 2, 1, 2, 1, 0, 1, 0],
    [0, 2, 2, 0, 0, 2, 0, 0, 0, 2]
  ]

  this.getMapMatrix = function () {
    return map
  }

  this.getMapReset = function () {
    return mapReset
  }

  this.getPositionValue = function (x, y) {
    return map[y][x]
  }

  this.setPositionValue = function (x, y, value) {
    if (x < 0 || y < 0 || x > 9 || y > 9) {

    } else {
      if (map[y][x] != WALL) {
        map[y][x] = value
      }
    }
  }

  this.resetMap = function () {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        map[i][j] = mapReset[i][j]
      }
    }
  }
}