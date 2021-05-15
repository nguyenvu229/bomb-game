function ViewEngine(game) {
  let canvas = document.getElementById("board")
  let context = canvas.getContext("2d")

  redrawElement()

  function redrawElement() {
    context.clearRect(0, 0, 500, 500)
    let map = game.getMap()
    let player1 = game.getPlayer1()
    let player2 = game.getPlayer2()

    drawMap(map)
    drawPlayer(player1, 1)
    drawPlayer(player2, 2)
    window.requestAnimationFrame(redrawElement)
  }

  function drawMap(map) {
    let mapMatrix = map.getMapMatrix()

    for (let i = 0; i < mapMatrix.length; i++) {
      for (let j = 0; j < mapMatrix[0].length; j++) {
        if (mapMatrix[i][j] == WALL) {
          let barrier = new Barrier(j * 50, i * 50, WALL)
          drawBarrier(barrier)
        } else if (mapMatrix[i][j] == BRICK) {
          let barrier = new Barrier(j * 50, i * 50, BRICK)
          drawBarrier(barrier)
        } else if (mapMatrix[i][j] == BOMB) {
          let bomb = new Bomb(j * 50 + 25, i * 50 + 25, map)
          drawBomb(bomb)
          bomb.explode()
          bomb.clear()
        } else if (mapMatrix[i][j] == FLAME) {
          let flame = new Flame(j * 50, i * 50)
          drawFlame(flame)
        }
      }
    }
  }

  function drawPlayer(player, num) {
    context.beginPath()
    if (num == 1) {
      context.fillStyle = "orange"
    } else if(num == 2) {
      context.fillStyle = "red"
    }
    context.fillRect(player.getX(), player.getY(), GRID_SIZE, GRID_SIZE);
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

  function drawBomb(bomb) {
    context.beginPath()
    context.fillStyle = "black"
    context.arc(bomb.getX(), bomb.getY(), bomb.getRadius(), 0, 2 * Math.PI)
    context.fill();
  }

  function drawFlame(flame) {
    context.beginPath()
    context.fillStyle = "yellow"
    context.fillRect(flame.getX(), flame.getY(), GRID_SIZE, GRID_SIZE);
  }
}