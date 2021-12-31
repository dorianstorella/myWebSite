game = document.getElementById("newGame");

game.addEventListener("click", startGame) 

function startGame() {
    let tray = [
        ["pionR", 0, "pionR", 0, "pionR", 0, "pionR", 0, "pionR", 0],
        [0, "pionR", 0, "pionR", 0, "pionR", 0, "pionR", 0, "pionR"],
        ["  ", 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["  ", 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["  ", 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, "pionW", 0, "pionW", 0, "pionW", 0, "pionW", 0, "pionW"],   
        ["pionW", 0, "pionW", 0, "pionW", 0, "pionW", 0, "pionW", 0],
    ]
}