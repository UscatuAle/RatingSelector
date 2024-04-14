let rating = 0;

function submit(){
    if(!rating){
        document.getElementById("labelBtn").style.display = "block";
    }else {
        document.getElementById("article").style.display = "none";
        document.getElementById("footer").style.display = "flex";
        document.getElementById("rating").innerHTML = rating;
    }
}

function radioSelect(nr){
    document.getElementById("labelBtn").style.display = "none";
    let list = document.getElementsByClassName("radio_Button");
    rating = nr;
    for(let i=0;i<list.length;i++){
        list[i].style.backgroundColor =  "hsl(213, 19%, 22%)";
        document.getElementById("label" + (i + 1)).style.color = "hsl(217, 12%, 63%)";
    }
    document.getElementById("radio" + nr).style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById("label" + nr).style.color = "White";
}
