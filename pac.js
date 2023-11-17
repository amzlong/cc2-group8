//nrswetha


// var i = 0;
// var images = 
//         [
//             "Images/2.png",
//             "Images/3.png",
//             "Images/4.jpg",
//             "family.png"
//         ];
// var slideTime = 3000; // 3 seconds


// function changePicture() {
//     // document.body.style.backgroundImage = "url(" + images[i] + ")";
//     document.slide.src=images[i];
//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout(changePicture, slideTime);
// }

// window.onload = changePicture;


// // window.onload = function(){
// //     targetDiv = document.getElementById("main_01");
// //     targetDiv.style.backgroundImage= "url(Images/2.png)"
// // };


// // targetDiv = document.getElementById("slide");
// // function changePicture() {
// //     targetDiv.style.display = "url(" + images[i] + ")";

// //     if (i < images.length - 1) {
// //         i++;
// //     } else {
// //         i = 0;
// //     }
// //     setTimeout(changePicture, slideTime);
// // }
// // window.onload = changePicture;






//----------------------------------------------------
var firstDiv = document.getElementById("sampleTesting");
var jump=document.getElementById("b1");
var returnToOriginal=document.getElementById("b2");




jump.onclick = function (){

    document.body.style.backgroundImage= "url(Images/family.png)"
};

returnToOriginal.onclick = function(){
    // elem.remove();
    document.querySelector("body").style.backgroundImage = "none";

};


//-----------------------------------------------------

var lucyButton=document.getElementById("b3");
var agnesButton=document.getElementById("b4");
var maidButton=document.getElementById("b5");
var farmerButton=document.getElementById("b6");
var butcherButton=document.getElementById("b7");
var patientButton=document.getElementById("b8");
var op = document.getElementById("extra")

var elem = document.createElement("img");
elem.setAttribute("height", 100);
elem.setAttribute("width", 100);


lucyButton.onclick = function() {
    op.innerHTML = "Lucy is one of the central characters in the game and is often the primary antagonist. She is a young, possessed girl who is both the source of fear and the main objective for players. Players are tasked with pacifying her by completing various objectives.";
  };
agnesButton.onclick = function(){
    op.innerHTML = "Agnes is another antagonist in the game. She's known for her eerie appearance and is one of the entities that players must deal with as they explore the haunted locations..";


};
maidButton.onclick = function(){
    op.innerHTML = "The Maid is another character that players encounter during their investigations. She plays a significant role in the game's storyline and is part of the challenges players face.";
};

farmerButton.onclick = function(){
    op.innerHTML = "The Farmer is another entity that players must confront. Each entity in the game presents unique challenges and requires different strategies to be pacified.";



};
butcherButton.onclick = function(){
    op.innerHTML = "The Butcher is one of the enemies players might encounter. Like other entities, the Butcher contributes to the horror elements of the game.";



};
patientButton.onclick = function(){
    op.innerHTML = " The Patient is another character you may come across during the game. It adds to the eerie atmosphere and challenges players to find ways to pacify it.";


};


