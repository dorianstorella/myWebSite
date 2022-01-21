
game = document.getElementById("newGame");

game.addEventListener("click", startGame) 

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

function startGame() 
{   

    game.setAttribute("style","display:none")
    
    //refaire avec un for
    let tray = 
    [
        ["pionR", 000, "pionR", 000, "pionR", 000, "pionR",000, "pionR", 000],
        [000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR"],
        ["pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000],
        [000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR"],
        ["  ", 000, "  ", 000, "  ", 000, "  ", 000, "  ", 000],
        [000, "  ", 000, "  ", 000, "  ", 000, "  ", 000, "  "],
        ["pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000],
        [000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW"],
        ["pionW", 000, "pionW", 000, "pionW", 0, "pionW", 000, "pionW",000],   
        [000,"pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW"],
    ]
   // console.log(tray[0][0])
   // condition si pas de couleur choisie 
    color = document.querySelector("input[name=color]:checked").value;
    
   

    rougeInput.setAttribute("style","display:none")
    rougeLabel.setAttribute("style","display:none")
    blancInput.setAttribute("style","display:none")
    blancLabel.setAttribute("style","display:none")
    

    plateau = document.createElement("table")
    plateau.setAttribute("style", "background-color:black;height:500px;width:500px;")
    document.getElementById('body').appendChild(plateau)
   
    tr = document.createElement("tr")
    plateau.appendChild(tr)
    
    // tray.forEach(element => {
    //     console.log(element+"")
    // });
  
    
    for (let y = 0 ; y < 10 ; y++)
    {   
      
        for (let x = 0 ; x < 10 ; x++ )
        {   
            if (y % 2 == 0)
            {
                if (x % 2 == 0 )
                {
                    div = document.createElement("th")
                    div.setAttribute("style"," color:red;background-color:black;height:50px;width:50px;")
                    div.setAttribute("class","container-pion")
                    tr.appendChild(div)
                }
                else if (x % 2 != 0)
                {
                    div = document.createElement("th")
                    div.setAttribute("style"," color:red;background-color:#d6d5d5;height:50px;width:50px;")
                    tr.appendChild(div)
                }
            }

            else if (y % 2 != 0)
            {
                if (x % 2 == 0 )
                {
                    div = document.createElement("th")
                    div.setAttribute("style"," color:red;background-color:#d6d5d5;height:50px;width:50px;")
                    tr.appendChild(div)
                }
                else if (x % 2 != 0)
                {
                    div = document.createElement("th")
                    div.setAttribute("style"," color:red;background-color:black;height:50px;width:50px; ")
                    tr.appendChild(div)
                }
            } 

            if (tray[y][x] === "pionR")
            {

                piondiv = document.createElement("div")
                piondiv.setAttribute("style","background-color:red;width:30px;height:30px;border-radius:25px;margin:auto;")
                piondiv.setAttribute("class", "item")
                piondiv.setAttribute("draggable", "true")
                piondiv.setAttribute("id","pionR"+x)
                
                div.appendChild(piondiv)
                
            }
            
            else if (tray[y][x] === "pionW")
            {
                piondiv = document.createElement("div")
                piondiv.setAttribute("style","background-color:#fff;width:30px;height:30px;border-radius:25px;margin:auto;")
                piondiv.setAttribute("class", "item")
                piondiv.setAttribute("draggable", "true")
                piondiv.setAttribute("id","pionW"+x)
                piondiv.addEventListener("click", deplacement) 
                div.appendChild(piondiv)
            }
           
            
        }

        if (y < 9)
        
            tr = document.createElement("tr")
            plateau.appendChild(tr)
        //afficher regle
        //une case avec  ne plus afficher se message == bool sur restart
        // voir si reprendre la boucle for si faut reafficher 
        // drag and drop https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
    }
}

function deplacement()
{
    // deplacement : pour pouvoir se deplacer remarque
    // selon le pion de couleur il doit aller plus haut ou plus bas 
    // et doit etre inferieure ou supperieure de 1 mais strictement 1
    // le rouge  avance de bas en haut tanids que les blacn se deplace de haut en bas
    // si il a un pion de sa couleure le pion  ne peux avancer sur cette case la 
    // select the item element
    //pas de drag and drop pour un autre jeux de plateau 
    // 


}


