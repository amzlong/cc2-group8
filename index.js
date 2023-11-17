window.onload = (event) => {
    // variable def
    let gameList = ["World of Warcraft", "Borderlands 2", "Pacify"],
        urlList = ["wow.html", "bl2.html", "pac.html"], 
        colorList = ["#db7093", "#daa520", "#416931"], 
        memberList = ["Ashton", "Sun", "Swetha"];

    let numGame = gameList.length,
        wheelItems = gameList.concat(gameList), // duplicating the game list for better visual effect
        numItem = wheelItems.length;

    // function def
    let loadNavBar = function() {
        let navItemList = ["Home"].concat(gameList);
        let navUrlList = ["index.html"].concat(urlList);
        let navColorList = ["cornflowerblue"].concat(colorList);
        document.querySelector('.navWrapper').innerHTML = navItemList.map((item, idx) => 
            `<div class="navItem" style="--clr:${navColorList[idx]};" onclick="window.location.href='${navUrlList[idx]}'"><span>${item}</span></div>`
        ).join('');
    }

    let resetItemFilter = function() {
        document.querySelectorAll('.spinWheel .spinItem').forEach(item => item.style.filter="brightness(.95) grayscale(.5)");
    }

    let spinWheel = function() {
        let randomVal = 200 + Math.ceil(Math.random() * 2000), // generate a random number
            itemIdx = (numItem - 1) - Math.floor((randomVal % 360) / (360 / numItem)); // get the selected item
        document.querySelector('.spinWheel').style.transform = `rotate(${randomVal}deg)`;
        displayGame(itemIdx);
    }

    window.spinWheel = spinWheel;

    let displayGame = function(idx) {
        resetItemFilter();
        document.querySelector('.dialogBoxWrapper .dialogBox span').innerHTML = "Let's see where the wheel takes you...";
        document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = "";

        setTimeout(() => {
            let memberName = memberList[idx % numGame],
                url = urlList[idx % numGame],
                gameName = gameList[idx % numGame],
                wordings = [
                    `Do you want to take a look at this awesome game <span class="gameName">${gameName}</span>
                    recommended by ${memberName}?`,
                    `<span class="gameName">${gameName}</span> is ${memberName}'s favorite video game.`
                ];

            // update the dialog box
            document.querySelector('.dialogBoxWrapper .dialogBox span').innerHTML = wordings[Math.floor(Math.random() * 2)];
            document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = `
                <div class='btn' onclick="window.location.href='${url}'"><span>Let's go!</span></div>
                <div class='btn' onclick="window.spinWheel()"><span>Nah, I will try my luck again.</span></div>
            `;

            // highlight the selected item
            document.querySelectorAll('.spinWheel .spinItem')[idx].style.filter = "none";
        }, 5030);
    }

    // prepare the navbar
    loadNavBar();

    // prepare the spin wheel
    document.querySelector('.spinBtn').onclick = spinWheel;
    document.querySelector('.spinWheel').innerHTML = wheelItems.map((item, idx) => {
        let color = colorList[idx % numGame];
        let url = urlList[idx % numGame];
        return `
            <div class="spinItem" style="--i:${idx};--clr:${color};" onclick="window.location.href='${url}'">
                <span>${item}</span>
            </div>`;
        }
    ).join('');
    document.querySelectorAll('.spinWheel .spinItem').forEach(
        item => item.style.transform = `rotate(calc(${360/numItem}deg * var(--i) + 75deg)`
        // the initial rotation degree needs to make sure the pointer
        // falls right in the middle of the first and last item
    );
    resetItemFilter();

    // prepare the group name span
    document.querySelector('.headingWrapper .groupName').onclick = (event) => {
        document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = "";
        document.querySelector('.dialogBoxWrapper .dialogBox span').innerHTML = `
            So you want to learn about the group?
            Ashton, Sun, and Swetha wrote the WoW, Borderlines 2, and Pacify pages.
            Yanyu wrote this index page.
        `;
        setTimeout(() => {
            document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = `
                <div class='btn' onclick="window.spinWheel()"><span>I see. Let's spin the wheel again.</span></div>
            `;
        }, 1500);
    };

    // prepare the dragonite
    document.querySelector('.dialogBoxWrapper .imgWrapper img').onclick = (event) => {
        let loadFirstSentence = () => {
            document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = "";
            document.querySelector('.dialogBoxWrapper .dialogBox span').innerHTML = `
                I am glad you asked! My name is Dragonite and I am from Yanyu's favorite game, Pokemon.
            `;
        }, loadSecondSentence = () => {
            document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = "";
            document.querySelector('.dialogBoxWrapper .dialogBox span').innerHTML = `
                No, we do not have a page for Pokemon because Yanyu spent too much time getting this spin wheel to work.
            `;
            setTimeout(() => {
                document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = `
                    <div class='btn' onclick="window.spinWheel()"><span>I will just spin the wheel again.</span></div>
                `;
            }, 1500);
        };
        window.loadSecondSentence = loadSecondSentence;

        loadFirstSentence();
        setTimeout(() => {
            document.querySelector('.dialogBoxWrapper .btnWrapper').innerHTML = `
                <div class='btn' onclick="window.loadSecondSentence()"><span>Why is there not a page for Pokemon?</span></div>
                <div class='btn' onclick="window.spinWheel()"><span>I will just spin the wheel again.</span></div>
            `;
        }, 1500);
    };
}
