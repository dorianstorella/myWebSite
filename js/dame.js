
game = document.getElementById("newGame");

game.addEventListener("click", startGame) 
game.addEventListener("click", updateGame) 

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
function startGame() 
{   

    game.setAttribute("style","display:none")
    
    //refaire avec un for
    
   // console.log(tray[0][0])
   // condition si pas de couleur choisie 
    color = document.querySelector("input[name=color]:checked").value;
    
    rougeInput.setAttribute("style","display:none")
    rougeLabel.setAttribute("style","display:none")
    blancInput.setAttribute("style","display:none")
    blancLabel.setAttribute("style","display:none")
   
    affichage()
   
        //afficher regle
        // drag and drop https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
    
}

// function updateGame()
// {
                                    // pas utile pour linstant
//     //selectionPion()
//     return tray
// }

function selectionPion(pion)
{   
    
    //affichage(tray)
    // selectionPion : pour pouvoir se deplacer remarque
    // selon le pion de couleur il doit aller plus haut ou plus bas 
    // et doit etre inferieure ou supperieure de 1 mais strictement 1
    // le rouge  avance de bas en haut tanids que les blacn se deplace de haut en bas
    // si il a un pion de sa couleure le pion  ne peux avancer sur cette case la 
    // select the item element
    //pas de drag and drop pour un autre jeux de plateau 
    parentligne = pion.explicitOriginalTarget.parentElement.parentElement.previousElementSibling
    parentnext = pion.explicitOriginalTarget.parentElement.parentElement.nextElementSibling
    cellx = pion.explicitOriginalTarget.offsetParent.cellIndex
    thisCellRed = parentnext.cells
    thisCellWhite = parentligne.cells
    cellY =  pion.explicitOriginalTarget.parentElement.parentElement.rowIndex
    
    console.log(pion)
    //console.log(cellx)
    //pour le rouge 
    if (color == "rouge")
    {
        
        for (let i = 0; i < 10; i++)
        {
            if (thisCellRed[i].cellIndex - 1 == cellx || thisCellRed[i].cellIndex + 1 == cellx )
            {
                //console.log(thisCellRed[i])
                let possible = thisCellRed[i]
                possible.addEventListener("click", selectionCase)
                
                
                
            } else 
            {
                let possible = thisCellRed[i]
                possible.removeEventListener("click", selectionCase)
                
            }
        }

    }

    if (color == "blanc")
    {
        for (let i = 0; i < 10; i++) 
        {
            if (thisCellWhite[i].cellIndex - 1 == cell || thisCellWhite[i].cellIndex + 1 == cell )
            {
                console.log(thisCellWhite[i])
                //rajouter evenement click pour mettre le pion dans la bonne balise html 
                console.log('hey')
            }
        }
    }
    
    //console.log(thisCell);
    //console.log(cell)

    //console.log(parentligne)
    //console.log(parentnext)
   // console.log(color)

   
}

function selectionCase(thiscase) 
{   
    cellcaseX = thiscase.originalTarget.cellIndex
    cellcaseY = thiscase.originalTarget.parentElement.rowIndex
    
    // console.log("case siblée x "+cellcaseX)
    // console.log("case siblée Y "+cellcaseY)

    
    // console.log("pion x "+cellx)
    // console.log("pion y"+cellY)
    
    temp = tray[cellY][cellx]
    tray[cellY][cellx]  = tray[cellcaseY][cellcaseX]
    tray[cellcaseY][cellcaseX] = temp
    
    console.log(tray[cellcaseY][cellcaseY])
    
    affichage()
    //prendre le pion sur leque on avais l evenement  et on le place dans la div de la case ou il click 
}

function affichage()
{   
    
    table = document.getElementById('table')
    if (table != null) table.remove()
    //table.parentNode.removeChild(table)

    tray = updateGame()

    //console.log(tray[0][0])
    plateau = document.createElement("table")
    plateau.setAttribute("style", "background-color:black;height:500px;width:500px;")
    plateau.setAttribute("id", "table")
    document.getElementById('body').appendChild(plateau)
    for (let y = 0 ; y < 10 ; y++)
    {   
        tr = document.createElement("tr")
       
        plateau.appendChild(tr)

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
                piondiv.addEventListener("click", selectionPion) // peut etre supprimé et ajouté dans la fonction ou on voit les deplacement
                div.appendChild(piondiv)
                
            }
            
            else if (tray[y][x] === "pionW")
            {
                piondiv = document.createElement("div")
                piondiv.setAttribute("style","background-color:#fff;width:30px;height:30px;border-radius:25px;margin:auto;")
                piondiv.setAttribute("class", "item")
                piondiv.setAttribute("draggable", "true")
                piondiv.setAttribute("id","pionW"+x)
                piondiv.addEventListener("click", selectionPion)
                div.appendChild(piondiv)
            }
        }
    }
}
//faire un fonction pour voir quel pion peut faire un deplacement

