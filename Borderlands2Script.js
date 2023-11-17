(function() {
  const quotes = [
    "She's got a gut full of dynamite and a booty like POW",
    "BRING ME A BUCKET AND I'LL SHOW YOU A BUCKET",
    "Earl's crazy. He ate one of my cars once. Yeah. The whole thing. Just like, with a fork",
    "NOTHING IS MORE BADASS THAN TREATING A WOMAN WITH RESPECT!",
    "Bacon is for sycophants and products of incest",
    "STRIP THE FLESH SALT THE WOUND",
    "I wonder what it's like to have a belly button",
    "I must've been horrifyingly cruel to puppies in a previous life to receive this kind of treatment.",
    "BURN ALL THE BABIES!!!!!",
    "I punch the initiative.",
    "How many pecs do you have? Two? I have thirteen!",
    "Your ability to walk short distances without dying will be Handsome Jack's downfall.",
    "Real badasses eat cookies! Ima get that tattooed on my back in old English font.",
    "Haha, I ASCEND",
    "I vowed I would never kill again, but screw it.",
  ];

  let loadNavBar = function() {
    let navItemList = ["Home", "World of Warcraft", "Borderlands 2", "Pacify"];
    let navUrlList = ["index.html", "wow.html", "bl2.html", "pac.html"];
    let navColorList = ["cornflowerblue", "#db7093", "#daa520", "#416931"];
    // need to have <div class="navWrapper"></div> in your html
    document.querySelector('.navWrapper').innerHTML = navItemList.map((item, idx) =>
      `<div class="navItem" style="--clr:${navColorList[idx]};" onclick="window.location.href='${navUrlList[idx]}'"><span>${item}</span></div>`
    ).join('');
  }

  loadNavBar();


  const quoteBtn = document.querySelector("button");
  const quoteDivTag = document.getElementById("quote");
  let previousQuote;
  let clicks = 0;
  quoteBtn.addEventListener("click", function(event) {
    clicks++;
    if (clicks == 1) {
      quoteBtn.innerText = "Generate Another Quote";
    }
    else if (clicks == 2) {
      quoteBtn.innerText = "Generate Another Quote!";
    }
    else if (clicks == 3) {
      quoteBtn.innerText = "GENERATE ANOTHER QUOTE!!!!";
    }
    else {
      quoteBtn.innerText = "KEEP GENERATING QUOTES!!!!";
      quoteBtn.style.width = "55%";
      quoteBtn.style.height = "55%";
      quoteBtn.style.fontSize = '20px';
    }
    event.preventDefault();
    const newP = document.createElement("p");
    let rand = Math.floor(Math.random() * quotes.length);
    while (previousQuote == rand) {
      rand = Math.floor(Math.random() * quotes.length);
    }
    const pText = document.createTextNode(quotes[rand]);
    newP.appendChild(pText);
    quoteDivTag.appendChild(newP);
    if (quoteDivTag.children.length > 2) {
      quoteDivTag.removeChild(quoteDivTag.children[1]);
    }
    previousQuote = rand;
  });

  const characterTextDivTag = document.getElementById('characterText');

  document.getElementById("Axton").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("shownImage").src = "BL2images/Axton.jpg";
    document.getElementById("shownImage").alt = "Axton";
    characterTextDivTag.children[0].innerText = "Axton is the Commando class of the game. He is a good choice for novice players as he is able to deploy a turret onto the battlefield to help him during combat. The turret is great for solo and co-op play as it will draw aggro from enemies. ";
    characterTextDivTag.children[1].innerText = "Axton is a versatile character and good with all gun types, however, he is able to excel in assault rifles and explosive weaponry. Axton also has a lot of survivability skills that can keep him on the battlefield.";

  });

  document
    .getElementById("Salvador")
    .addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("shownImage").src = "BL2images/Salvador.jpg";
      document.getElementById("shownImage").alt = "Salvador";
      characterTextDivTag.children[0].innerText = "Salvador is the Gunzerker class of the game. He is able to dual-wield any two guns during combat for maximum damage. Salvador can be a tank that you can spec out to keep on shooting, and shooting, and shooting! ";
      characterTextDivTag.children[1].innerText = "Salvador is considered to be one of the better Vault Hunters as he can put out a lot of damage with the skill “money shot” and transfer weapon stats while dual wielding.";

    });

  document.getElementById("Maya").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("shownImage").src = "BL2images/Maya.jpg";
    document.getElementById("shownImage").alt = "Maya";
    characterTextDivTag.children[0].innerText = "Maya is the Siren class of the game. She is able to Placelock enemies and stuns them at their current position. Maya’s gameplay is more active due to her action skill. While her Phaselock ability is pretty powerful, it, however, doesn’t last very long. ";
    characterTextDivTag.children[1].innerText = "The upside is that Maya’s action skill has a short cooldown, which lets you use it quite often. So if you like an action-packed solo experience Maya has an aggressive playstyle. When you like to play co-op then Maya is also a great buddy to have around as she has the ability to keep the team’s health up and revive others at a distance.";
  });

  document.getElementById("Zer0").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("shownImage").src = "BL2images/Zer0.jpg";
    document.getElementById("shownImage").alt = "Zer0";
    characterTextDivTag.children[0].innerText = "Zer0 is the Assassin class of the game. He is able to cloak himself and deploy a decoy onto the battlefield. If you like stabbing enemies in the back or sniping them from a distance then Zero is your man. He might be one of the more difficult characters to master but once you do, you can do some crazy stuff.";
    characterTextDivTag.children[1].innerText = "";

  });

  document.getElementById("Krieg").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("shownImage").src = "BL2images/Krieg.jpg";
    document.getElementById("shownImage").alt = "Krieg";
    characterTextDivTag.children[0].innerText = "Krieg is the Psycho class of the game. He is able to transform into a psychotic killer. Equipped with his Buzzaxe, this maniac will go on a rampage and therefore, his playstyle differs from the other vault hunters, as with this character you want to take as much damage as possible to boost yourself. If you like to melee stuff, Krieg is your guy!";
    characterTextDivTag.children[1].innerText = "";

  });

  document.getElementById("Gaige").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("shownImage").src = "BL2images/Gaige.jpg";
    document.getElementById("shownImage").alt = "Gaige";
    characterTextDivTag.children[0].innerText = "Gaige is the Mechromancer class of the game. She was the first DLC character and features skills that could help new FPS players on their way. She is able to summon a giant robot called Deathtrap. Her mechanical companion can slash enemies to bits or burn them with his laser eye.";
    characterTextDivTag.children[1].innerText = "";

  });
})();
