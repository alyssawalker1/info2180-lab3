

window.onload = loadpage;

function loadpage()
{ 
    start = document.getElementById("board")
    spaces = start.childElementCount

    for(i=0; i<= spaces-1; i++)
    {
        start.children[i].classList.add("square")       
    }
}