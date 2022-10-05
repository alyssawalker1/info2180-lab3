
move1 = 0;

window.onload = loadpage;

function loadpage()
{ 
    start = document.getElementById("board")
    spaces = start.childElementCount

    for(i=0; i<= spaces-1; i++)
    {
        start.children[i].classList.add("square")       
        start.children[i].addEventListener('click', clicker)
    }
}

function clicker(event)
{
    pos = Array.from(start.children).indexOf(event.target)
    if (move1 == 0)
    {
        start.children[pos].classList.add("O")
        start.children[pos].innerHTML= "O"
        move1 = 1
    } else
    {
        start.children[pos].classList.add("X")
        start.children[pos].innerHTML= "X"
        move1 = 0
    }

console.log(pos)}
