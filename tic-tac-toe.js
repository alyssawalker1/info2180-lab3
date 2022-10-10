window.onload = loadpage;

firstmove = false
winbool = false

function loadpage()
{   move1 = 0;
    start = document.getElementById("board")
    spaces = start.childElementCount

    for(i=0; i<= spaces-1; i++)
    {
        start.children[i].classList.add("square")       
        start.children[i].addEventListener('click', clicker)
        start.children[i].addEventListener('mouseover', highlight)
        start.children[i].addEventListener('mouseout', highlight)
    }
    
    document.getElementsByClassName("btn")[0].addEventListener('click', newgame)
}
function highlight(event)
{
    pos = Array.from(start.children).indexOf(event.target)
    if (event.type == "mouseover")
    {
        start.children[pos].classList.add("hover")
    }else if (event.type == "mouseout")
    {
        start.children[pos].classList.remove("hover")
    }
}

function clicker(event)
{
    if(!winbool){
        pos = Array.from(start.children).indexOf(event.target)



        if (move1 == 0)
        {   
            if(start.children[pos].innerHTML != "X"){
                start.children[pos].classList.add("O")
                start.children[pos].innerHTML= "O"
                move1 = 1
                tictactoe.stateofo[pos] = true
            }
        } else
        { 
            if(start.children[pos].innerHTML != "O"){

                start.children[pos].classList.add("X")
                start.children[pos].innerHTML= "X"
                move1 = 0
                tictactoe.stateofx[pos] = true
            }
        }
        firstmove = true
        winner()
    }
}

const tictactoe = {
    turns: true, 
    stateofx: [false,false,false,false,false,false,false,false,false],
    stateofo: [false,false,false,false,false,false,false,false,false],

    win_states: [
        //columns 
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],

        //rows
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],

        //Diagonally
        ['0','4','8'],
        ['2','4','6'],
    ]

}

function winner()
{   
    x_winco = 0
    o_winco = 0  

    for (count = 0; count<= tictactoe.win_states.length-1; count ++)
    {
        for (innercount = 0; innercount <= tictactoe.win_states[count].length-1; innercount ++)
        { 
            if(tictactoe.stateofx[tictactoe.win_states[count][innercount]] == true){
                x_winco ++
                if(x_winco == 3){
                    document.getElementById("status").innerHTML = "Congratulations! X is the Winner!"
                    document.getElementById("status").classList.add("you-won")
                    winbool = true
                }
            }else if(tictactoe.stateofo[tictactoe.win_states[count][innercount]] == true){
                o_winco ++
                if(o_winco == 3){
                    document.getElementById("status").innerHTML = "Congratulations! O is the Winner!"
                    document.getElementById("status").classList.add("you-won")
                    winbool = true
                }
            }
        }
        x_winco = 0
        o_winco = 0
    }
}

function newgame(event)
{
    if (firstmove){
        if(event)
        {
            location.reload()           
        }
    }
}