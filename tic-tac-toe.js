
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
        start.children[i].addEventListener('mouseover', highlight)
        start.children[i].addEventListener('mouseout', highlight)
    }
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
