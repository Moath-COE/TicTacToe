const GameBoard = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", "X"],
  ];

  let winner = "";

  function updateBoard(x, y, playerSymbol) {
    x = parseInt(x);
    y = parseInt(y);

    console.log(x);
    if (!board[x][y]) {
      board[x][y] = playerSymbol;
      return true;
    }
    return false;
  }

  function checkGameEnd() {
    for (let i in board) {
      if (board[i][0] && (board[i][0] === board[i][1]) === board[i][2]) {
        winner = board[i][0] === "X" ? 1 : 2;
        return true;
      } else if (board[0][i] && (board[0][i] === board[1][i]) === board[2][i]) {
        winner = board[0][i] === "X" ? 1 : 2;
        return true;
      }
      return false;
    }
  }

  function getWinner() {
    return winner;
  }

  return { checkGameEnd, updateBoard, getWinner };
})();

const Player = function (id, name, symbol) {
  function play(x, y) {
    GameBoard.updateBoard(x, y, symbol);
  }

  return { id, name, play };
};

const GameController = (function () {
  const players = {
    1: Player(1, "moaz", "X"),
    2: Player(2, "yousef", "Y"),
  };

  for (let i = 0; i < 9; i++) {
    let [x, y] = prompt(
      `PLayer ${i % 2 == 0 ? "1" : "2"} move (in x, y format): `
    ).split();
    players[i % 2 == 0 ? 1 : 2].play(x, y);
    if (GameBoard.checkGameEnd()) {
      console.log(GameBoard.getWinner());
      return;
    }
  }
})();
