function ViewEngine(game) {
  let canvas = document.getElementById("board")
  let context = canvas.getContext("2d")

  redrawElement()

  function redrawElement() {
    context.clearRect(0, 0, 500, 500)
    let map = game.getMap()
    let player1 = game.getPlayer1()
    let player2 = game.getPlayer2()

    game.checkPlayersInFlame()
    drawMap(map)
    drawPlayer(player1, 1)
    drawPlayer(player2, 2)

    window.requestAnimationFrame(redrawElement)
  }

  function drawMap(map) {
    let mapMatrix = map.getMapMatrix()

    for (let i = 0; i < mapMatrix.length; i++) {
      for (let j = 0; j < mapMatrix[0].length; j++) {
        let grass = new Grass(j * GRID_SIZE, i * GRID_SIZE)
        drawGrass(grass)
        if (mapMatrix[i][j] == WALL) {
          let barrier = new Barrier(j * GRID_SIZE, i * GRID_SIZE, WALL)
          drawBarrier(barrier)
        } else if (mapMatrix[i][j] == BRICK) {
          let barrier = new Barrier(j * GRID_SIZE, i * GRID_SIZE, BRICK)
          drawBarrier(barrier)
        } else if (mapMatrix[i][j] == BOMB) {
          let bomb = new Bomb(j * GRID_SIZE, i * GRID_SIZE, map)
          drawBomb(bomb)
          bomb.explode()
        } else if (mapMatrix[i][j] == FLAME) {
          let flame = new Flame(j * GRID_SIZE, i * GRID_SIZE)
          drawFlame(flame)
          clearFlame(flame, map)
        }
      }
    }
  }

  function drawPlayer(player, num) {
    if (num == 1) {
      let img = document.getElementById("p1");
      context.drawImage(img, player.getX(), player.getY(), GRID_SIZE, GRID_SIZE);
    } else if (num == 2) {
      let img = document.getElementById("p2");
      context.drawImage(img, player.getX(), player.getY(), GRID_SIZE, GRID_SIZE);
    }
  }

  function drawBarrier(barrier) {
    context.beginPath()
    if (barrier.getType() == WALL) {
      let img = document.getElementById("box");
      context.drawImage(img, barrier.getX(), barrier.getY(), GRID_SIZE, GRID_SIZE);
    } else if (barrier.getType() == BRICK) {
      let img = document.getElementById("tree");
      context.drawImage(img, barrier.getX(), barrier.getY(), GRID_SIZE, GRID_SIZE);
    }
  }

  function drawBomb(bomb) {
    let img = document.getElementById("bomb");
    context.drawImage(img, bomb.getX(), bomb.getY(), GRID_SIZE, GRID_SIZE);
  }

  function drawFlame(flame) {
    let img = document.getElementById("fire");
    context.drawImage(img, flame.getX(), flame.getY(), GRID_SIZE, GRID_SIZE);
  }

  function drawGrass(grass) {
    let img = document.getElementById("grass");
    context.drawImage(img, grass.getX(), grass.getY(), GRID_SIZE, GRID_SIZE);
  }

  function clearFlame(flame, map) {

    setTimeout(function () {
      clear(flame, map)
    }, 1000)

    function clear(flame, map) {
      let x = flame.getX() / GRID_SIZE
      let y = flame.getY() / GRID_SIZE
      map.setPositionValue(x, y, 0)
    }
  }
}