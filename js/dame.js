game = document.getElementById("newGame");

game.addEventListener("click", startGame) 

function startGame() 
{   

    game.setAttribute("style","display:none")
    let tray = [
        ["pionR", 0, "pionR", 0, "pionR", 0, "pionR", 0, "pionR", 0],
        [0, "pionR", 0, "pionR", 0, "pionR", 0, "pionR", 0, "pionR"],
        ["  ", 0, "  ", 0, "  ", 0, "  ", 0, "  ", 0],
        [0, "  ", 0, "  ", 0, "  ", 0, "  ", 0, "  "],
        ["  ", 0, "  ", 0, " ", 0, "  ", 0, "  ", 0],
        [0, "  ", 0, "  ", 0, "  ", 0, "  ", 0, "  "],
        ["  ", 0, "  ", 0, "  ", 0, "  ", 0, "  ", 0],
        [0, "  ", 0, "  ", 0, "  ", 0, "  ", 0, "  "],
        ["pionW", 0, "pionW", 0, "pionW", 0, "pionW", 0, "pionW",0],   
        [0,"pionW", 0, "pionW", 0, "pionW", 0, "pionW", 0, "pionW"],
    ]
    // tray.forEach(element => {
    //     console.log(element+"")
    // });
   
    const rougeInput = document.createElement("input")
    rougeInput.setAttribute("type", "radio")
    rougeInput.setAttribute("name","color")
    rougeInput.setAttribute("value","rouge")
    
    const rougeLabel = document.createElement("label")
    rougeLabel.setAttribute("type","rouge")
    rougeLabel.innerHTML = "rouge"
    
    const blancInput = document.createElement("input")
    blancInput.setAttribute("type", "radio")
    blancInput.setAttribute("name","color")
    blancInput.setAttribute("value","blanc")
    
    const blancLabel = document.createElement("label")
    blancLabel.setAttribute("type","blanc")
    blancLabel.innerHTML = "blanc"

    document.body.insertBefore(rougeLabel, game)
    document.body.insertBefore(rougeInput,rougeLabel)
    document.body.insertBefore(blancLabel, game)
    document.body.insertBefore(blancInput,blancLabel)
}

