const myImg = document.getElementById('myImg');

const myTitle = document.getElementById('myTitle');


let imgs = [
"picture/nationaal-videogame-museum.png",
"picture/friends.jpeg", 
"picture/mqdefault.jpg", 
"picture/erobo.jpeg", 
"picture/mysticaltree.jpg"
]

function changeImage(index){
    myTitle.innerHTML = titles[index];
    myImg.src = imgs[index];
}

let titles = [

    "Een leuke arcade voor leuke mensen",
    "Personen die hier in deze gave arcade komen spelen",
    "turkisch wolf",
    "vaperwave robot",
    "mystical tree"
]
