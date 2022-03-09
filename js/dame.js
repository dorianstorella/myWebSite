
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

// blanc commence
tourcolor = "rouge"
count = 0
let tray = 
[
    [000 ,"pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR"],
    ["pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000],
    [000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR"],
    ["pionR" , 000, "pionR", 000, "pionR", 000, "pionR", 000, "pionR",000],
    ["  ", 000, "  ", 000, "  ", 000, "  ", 000],
    [000, "  ", 000, "  ", 000, "  ", 000, "  "],
    [ 000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW",000, "pionW"], 
    ["pionW", 000,"pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000,],
    [000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW"],   
    ["pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000, "pionW", 000]
]

function startGame() 
{   

    game.setAttribute("style","display:none")
    
    color = document.querySelector("input[name=color]:checked").value;
    
    rougeInput.setAttribute("style","display:none")
    rougeLabel.setAttribute("style","display:none")
    blancInput.setAttribute("style","display:none")
    blancLabel.setAttribute("style","display:none")
   
    affichage()
    

   
        //afficher regle
    
}

function updateGame()
{
                                    //pas utile pour linstant
    //selectionPion()
    return tray
}

function selectionPion(pion)
{   
    parentligne = pion.explicitOriginalTarget.parentElement.parentElement.previousElementSibling
    parentnext = pion.explicitOriginalTarget.parentElement.parentElement.nextElementSibling
    
    cellx = pion.explicitOriginalTarget.offsetParent.cellIndex
    cellY =  pion.explicitOriginalTarget.parentElement.parentElement.rowIndex
    
    thisCellWhite = parentligne.cells
    thisCellRed = parentnext.cells
    // let n = 1
    // let pionTakeByTag = document.getElementsByTagName("tr")[cellY+1].children[cellx+1]
    //console.log(pionTakeByTag)
    
    console.log(" case parente ligne : ->")
    console.log(thisCellRed)
    
    console.log(tray[cellY][cellx]);
    
    console.log(pion.explicitOriginalTarget.parentElement.parentElement)
    
    if (tourcolor == "rouge")
    {
        
        for (let i = 1; i < 9; i++)
        {
            if (tray[cellY+1][cellx+1] == "  ")
            {
                //console.log(thisCellRed[i])
                let possible = thisCellRed[cellx+1]
                
                //mettre a toute les case possible cet event
                possible.addEventListener("click", selectionCase)
                
            }
/*ajouter*/ else if(tray[cellY+1][cellx+1] == "pionW" && tray[cellY+2][cellx+2] == "  " )
/*cette */  {  
/*section*/     bol = true
                for (j=1; bol; j++)
                {
    /*au blanc*/    for (y=1; bol; y++)
                    {                       
                        if(tray[cellY+j][cellx+y] == "pionW" && tray[cellY+(j+1)][cellx+(y+1)] == "  ")
                        {   
                            let pionTakeByTag = document.getElementsByTagName("tr")[cellY+j+1].children[cellx+y+1]
                            //console.log(pionTakeByTag)
                            let possible = pionTakeByTag 
                            possible.addEventListener("click", selectionCase)
                            //prendre le pion saute dans array et supprime dans selectioncase()
                            // set sur chaque instance un << click , slectioncase >>
                            
                            
                        }
                        else if (tray[cellY+j][cellx-y] == "pionW" && tray[cellY+(j-1)][cellx+(y-1)] == "  ")
                        {
                            //prendre le pion saute dans array et supprime dans selectioncase()
                            // set sur chaque instance un << click , slectioncase >>
                            console.log(tray[cellY+j][cellx+y])
                        }
                        else // (tray[cellY+j][cellx+y] == "pionW"  && tray[cellY+j+1][cellx+y+1] == "pionW")
                        {
                            bol = false;
                        }
                    
                    }
                }
            }
           




            if (tray[cellY+1][cellx-1] == "  ")
            {
                //console.log(thisCellRed[i])
                let possible = thisCellRed[cellx-1]
                
                //mettre a toute les case possible cet event
                possible.addEventListener("click", selectionCase)
                
            }
            else if(tray[cellY+1][cellx-1] == "pionW" && tray[cellY+2][cellx-2] == "  " ) // peut etre doubler la coudition, avec un OR pou voir de lautre sens 
            {  
                
               bol = true
               for (y=1; bol; y++)
               {
                    if(tray[cellY+i][cellx+i] == "pionW" && tray[cellY+i+1][cellx+i+1] == "  ")
                    {
                        //prendre le pion saute dans array et supprime dans selectioncase()
                        // set sur chaque instance un << click , slectioncase >>
                    }
                    else if (tray[cellY-i][cellx-i] == "pionW" && tray[cellY+i-1][cellx+i-1] == "  ")
                    {
                        //prendre le pion saute dans array et supprime dans selectioncase()
                        // set sur chaque instance un << click , slectioncase >>
                    }
               }
            } 
            else 
            {
                let possible = thisCellRed[cellx]
                possible.removeEventListener("click", selectionCase)
                
            }
        }

    }

    if (tourcolor == "blanc")
    {
        for (let i = 0; i < 8; i++) 
        {   

            //retire tout les a
            if (tray[cellY-1][cellx+1] == "  ")
            {
                let possible = thisCellWhite[cellx+1]
                console.log(thisCellWhite[cellx+1])
                possible.addEventListener("click", selectionCase)
                
            }
            else 
            {
                let possible = thisCellWhite[cellx+1]
                possible.removeEventListener("click", selectionCase)
                
            }

            if (tray[cellY-1][cellx-1] == "  ")
            {
                //console.log(thisCellRed[i])
                let possible = thisCellWhite[cellx-1]
                
                //mettre a toute les case possible cet event
                possible.addEventListener("click", selectionCase)
                
            } 
            else 
            {
                let possible = thisCellWhite[cellx-1]
                possible.removeEventListener("click", selectionCase)
                
            }
        }
    }
    
}

function selectionCase(thiscase)  // a mettre peut etre dans  boucle sur forgame()
{           // pos du pion sur lequel on click
    cellcaseX = thiscase.originalTarget.cellIndex  
    cellcaseY = thiscase.originalTarget.parentElement.rowIndex 
    
    // ajouter un tableau des pion et leur position a retirer  de notre tableauplateau 

    temp = tray[cellY][cellx]
    tray[cellY][cellx]  = tray[cellcaseY][cellcaseX]
    tray[cellcaseY][cellcaseX] = temp
    
   
    console.log(tray[cellcaseY][cellcaseY])
    count++
    affichage() // a remettre en fin de boucle sur forgame()

}
//faire un fonction pour voir quel pion peut faire un deplacement
function possibleMovement(tourcolor) // regarder quel boutton peut se deplacer selon le tour du jouieur 
{   

    if (tourcolor == "rouge")
    {
        poss = document.getElementsByClassName("pionR")
        for (let index = 0; index < poss.length; index++) 
        {
            const element = poss[index];
            possY = poss[index].offsetParent.parentElement.rowIndex
            possX = poss[index].offsetParent.cellIndex
            
           if(tray[possY+1][possX+1] == "  " || tray[possY+1][possX-1] == "  " )
            {
                element.addEventListener("click", selectionPion)
            }
            else if (tray[possY+1][possX+1] == "pionW" && tray[possY+2][possX+2] == "  " ) 
            {
                
                element.addEventListener("click", selectionPion)
            }
            else if (tray[possY+1][possX-1] == "pionW" && tray[possY+2][possX-2] == "  " )
            {
                element.addEventListener("click", selectionPion)
            }
           
        }
        
    }

    if (tourcolor == "blanc")
    {
        poss = document.getElementsByClassName("pionW")
        for (let index = 0; index < poss.length; index++) 
        {
            const element = poss[index];
            possY = poss[index].offsetParent.parentElement.rowIndex
            possX = poss[index].offsetParent.cellIndex
            
            if(tray[possY-1][possX-1] == "  " || tray[possY-1][possX+1] == "  " )
            {
                element.addEventListener("click", selectionPion)
            }
            else if (tray[possY-1][possX-1] == "pionR" && tray[possY-2][possX-2] == "  " )
            {
                
                element.addEventListener("click", selectionPion)
            }
            else if (tray[possY-1][possX+1] == "pionR" && tray[possY-2][possX+2] == "  " )
            {
                element.addEventListener("click", selectionPion)
            }
           
        }
        //console.log(poss)
    }
}

function affichage()
{   
   
   
    table = document.getElementById('table')
    if (table != null) table.remove()

    tray = updateGame()

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
                    div.setAttribute("style"," color:red;background-color:#d6d5d5;height:50px;width:50px;")
                    div.setAttribute("class","container-pion")
                    tr.appendChild(div)
                }
                else if (x % 2 != 0)
                {
                    div = document.createElement("th")
                    div.setAttribute("style"," color:red;background-color:black;height:50px;width:50px;")
                    tr.appendChild(div)
                }
            }
                            
            else if (y % 2 != 0)
            {
                if (x % 2 == 0 )
                {
                    div = document.createElement("th")
                    div.setAttribute("style"," color:red;background-color:black;height:50px;width:50px;")
                    tr.appendChild(div)
                }
                else if (x % 2 != 0)
                {
                    div = document.createElement("th")
                    div.setAttribute("style"," color:red;background-color:#d6d5d5;height:50px;width:50px; ")
                    tr.appendChild(div)
                }
            } 

            if (tray[y][x] === "pionR")
            {

                piondiv = document.createElement("div")
                piondiv.setAttribute("style","background-color:red;width:30px;height:30px;border-radius:25px;margin:auto;")
                piondiv.setAttribute("class", "pionR")
                piondiv.setAttribute("id","pionR"+x)
                div.appendChild(piondiv)
                
            }
            
            else if (tray[y][x] === "pionW")
            {
                piondiv = document.createElement("div")
                piondiv.setAttribute("style","background-color:#fff;width:30px;height:30px;border-radius:25px;margin:auto;")
                piondiv.setAttribute("class", "pionW")
                piondiv.setAttribute("id","pionW"+x)
                div.appendChild(piondiv)
            }
           
            //possibleMovement(tourcolor)
            
            if (count % 2 == 0)
            {
                tourcolor = "rouge"
            }
            else
            {
                tourcolor = "blanc"
            }
            
            possibleMovement(tourcolor)
            
        }
    }
}


