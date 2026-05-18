 


/* =========================
   SLIDESHOW
========================= */

let slideIndex = 0;

showSlides();

function showSlides(){

    let slides =
        document.getElementsByClassName("slide");

    for(let i = 0; i < slides.length; i++){

        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length){

        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

/* =========================
   ELEMENTS
========================= */

const startBtn =
    document.getElementById("startBtn");

const homeScreen =
    document.getElementById("homeScreen");

const scratchScreen =
    document.getElementById("scratchScreen");

const introMessage =
    document.getElementById("introMessage");

const gameArea =
    document.getElementById("gameArea");

const matchScreen =
    document.getElementById("matchScreen");

const infoScreen =
    document.getElementById("infoScreen");

const colorScreen =
    document.getElementById("colorScreen");

const gblScreen =
    document.getElementById("gblScreen");

const artistScreen =
    document.getElementById("artistScreen");

const clapSound =
    document.getElementById("clapSound");

const canvas =
    document.getElementById("scratchCanvas");

const ctx =
    canvas.getContext("2d");

/* =========================
   DYNAMIC ELEMENTS
========================= */

const hiddenImage =
    document.getElementById("hiddenImage");

const revealedArtImage =
    document.getElementById("revealedArtImage");

const infoTitle =
    document.getElementById("infoTitle");

const infoDescription =
    document.getElementById("infoDescription");

const colorImage =
    document.getElementById("colorImage");

const learnBtn =
    document.getElementById("learnBtn");

const buyBtn =
    document.getElementById("buyBtn");

const colorBtn =
    document.getElementById("colorBtn");

const feedbackBtn =
    document.getElementById("feedbackBtn");

const homeBtn =
    document.getElementById("homeBtn");

const backInfoBtn =
    document.getElementById("backInfoBtn");

const printBtn =
    document.getElementById("printBtn");

const gblBtn =
    document.getElementById("gblBtn");

const startGBLBtn =
    document.getElementById("startGBLBtn");

/* =========================
   ARTIST QUIZ ELEMENTS
========================= */

const questionText =
    document.getElementById("questionText");

const answerOptions =
    document.getElementById("answerOptions");

const feedbackMessage =
    document.getElementById("feedbackMessage");

const artistDialogue =
    document.getElementById("artistDialogue");

const artistImage =
    document.getElementById("artistImage");

/* =========================
   ART DATABASE
========================= */

const arts = [

{
    id: "gond",

    name: "Gond Art",

    image: "assets/gond.png",

    outline: "assets/gondoutline.png",

    artist: "assets/gond-artist.png",

    info:
    "Gond art is a traditional tribal art form from central India known for detailed patterns, dots, vibrant colours, and storytelling.",

    tutorial:
    "https://www.youtube.com/results?search_query=gond+art+tutorial",

    buy:
    "https://www.gaatha.com"
},

{
    id: "warli",

    name: "Warli Art",

    image: "assets/warli.png",

    outline: "assets/warlioutline.png",

    artist: "assets/warli-artist.png",

    info:
    "Warli art is a tribal art tradition from Maharashtra using geometric forms to depict daily life and nature.",

    tutorial:
    "https://www.youtube.com/results?search_query=warli+art+tutorial",

    buy:
    "https://www.gaatha.com"
},

{
    id: "madhubani",

    name: "Madhubani Art",

    image: "assets/madhubani.png",

    outline: "assets/madhubanioutline.png",

    artist: "assets/madhubani-artist.png",

    info:
    "Madhubani art from Bihar is known for symbolic patterns, vibrant colours, and intricate detailing.",

    tutorial:
    "https://www.youtube.com/results?search_query=madhubani+art+tutorial",

    buy:
    "https://www.gaatha.com"
},

{
    id: "kalamkari",

    name: "Kalamkari Art",

    image: "assets/kalamkari.png",

    outline: "assets/kalamkarioutline.png",

    artist: "assets/kalamkari-artist.png",

    info:
    "Kalamkari is a traditional hand-painted textile art from Andhra Pradesh and Telangana.",

    tutorial:
    "https://www.youtube.com/results?search_query=kalamkari+art+tutorial",

    buy:
    "https://www.gaatha.com"
},

{
    id: "pattachitra",

    name: "Pattachitra Art",

    image: "assets/pattachitra.png",

    outline: "assets/pattachitraoutline.png",

    artist: "assets/pattachitra-artist.png",

    info:
    "Pattachitra is a traditional scroll painting art from Odisha famous for mythological storytelling.",

    tutorial:
    "https://www.youtube.com/results?search_query=pattachitra+art+tutorial",

    buy:
    "https://www.gaatha.com"
}

];

/* =========================
   RANDOM ART
========================= */

let currentArt =
    arts[Math.floor(Math.random() * arts.length)];

/* =========================
   LOAD CURRENT ART
========================= */

function loadCurrentArt(){

    hiddenImage.src =
        currentArt.image;

    revealedArtImage.src =
        currentArt.image;

    infoTitle.innerText =
        currentArt.name;

    infoDescription.innerText =
        currentArt.info;

    colorImage.src =
        currentArt.outline;

    artistImage.src =
        currentArt.artist;
}

/* =========================
   START GAME
========================= */

startBtn.addEventListener("click", () => {

    loadCurrentArt();

    homeScreen.style.display =
        "none";

    scratchScreen.style.display =
        "flex";

    setTimeout(() => {

        introMessage.style.display =
            "none";

        gameArea.style.display =
            "flex";

        initializeScratchCanvas();

    }, 3000);
});

/* =========================
   INITIALIZE SCRATCH
========================= */

function initializeScratchCanvas(){

    canvas.width = 400;

    canvas.height = 400;

    ctx.globalCompositeOperation =
        "source-over";

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
        "rgba(123,44,191,1)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    window.screenChanged = false;
}

/* =========================
   SCRATCHING
========================= */

let isScratching = false;

canvas.addEventListener(
    "mousedown",
    startScratch
);

canvas.addEventListener(
    "touchstart",
    startScratch,
    { passive:false }
);

canvas.addEventListener(
    "mouseup",
    stopScratch
);

canvas.addEventListener(
    "mouseleave",
    stopScratch
);

canvas.addEventListener(
    "touchend",
    stopScratch
);

canvas.addEventListener(
    "mousemove",
    scratch
);

canvas.addEventListener(
    "touchmove",
    scratchTouch,
    { passive:false }
);

function startScratch(){

    isScratching = true;

    if(clapSound.paused){

        clapSound.play();
    }
}

function stopScratch(){

    isScratching = false;
}

function scratch(e){

    if(!isScratching) return;

    const rect =
        canvas.getBoundingClientRect();

    const x =
        e.clientX - rect.left;

    const y =
        e.clientY - rect.top;

    erase(x, y);
}

function scratchTouch(e){

    e.preventDefault();

    if(!isScratching) return;

    const rect =
        canvas.getBoundingClientRect();

    const touch =
        e.touches[0];

    const x =
        touch.clientX - rect.left;

    const y =
        touch.clientY - rect.top;

    erase(x, y);
}

/* =========================
   ERASE FUNCTION
========================= */

function erase(x, y){

    ctx.globalCompositeOperation =
        "destination-out";

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        35,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.closePath();

    ctx.globalCompositeOperation =
        "source-over";

    checkScratchPercentage();
}

/* =========================
   CHECK REVEAL
========================= */

function checkScratchPercentage(){

    const imageData =
        ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );

    const pixels =
        imageData.data;

    let transparentPixels = 0;

    for(let i = 3; i < pixels.length; i += 4){

        if(pixels[i] === 0){

            transparentPixels++;
        }
    }

    const percentage =
        transparentPixels /
        (canvas.width * canvas.height);

    if(percentage > 0.70){

        if(!window.screenChanged){

            window.screenChanged = true;

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            setTimeout(() => {

                clapSound.pause();

                clapSound.currentTime = 0;

                scratchScreen.style.display =
                    "none";

                matchScreen.style.display =
                    "flex";

            }, 1500);
        }
    }
}

/* =========================
   MATCHING SYSTEM
========================= */

const optionBoxes =
    document.querySelectorAll(".optionBox");

const chanceText =
    document.getElementById("chanceText");

let chancesLeft = 2;

optionBoxes.forEach((box) => {

    box.addEventListener("click", () => {

        const selectedArt =
            box.dataset.match;

        if(selectedArt === currentArt.id){

            box.classList.add(
                "correctMatch"
            );

            clapSound.play();

            setTimeout(() => {

                clapSound.pause();

                clapSound.currentTime = 0;

                matchScreen.style.display =
                    "none";

                infoScreen.style.display =
                    "flex";

            }, 1500);

        }else{

            chancesLeft--;

            chanceText.innerText =
                "Chances Left: " +
                chancesLeft;

            box.classList.add(
                "wrongMatch"
            );

            setTimeout(() => {

                box.classList.remove(
                    "wrongMatch"
                );

            }, 800);

            if(chancesLeft <= 0){

                setTimeout(() => {

                    alert(
                        "No more chances! Try again."
                    );

                    location.reload();

                }, 1000);
            }
        }
    });
});

/* =========================
   INFO BUTTONS
========================= */

learnBtn.onclick = function(){

    window.open(
        currentArt.tutorial,
        "_blank"
    );
};

buyBtn.onclick = function(){

    window.open(
        currentArt.buy,
        "_blank"
    );
};

colorBtn.onclick = function(){

    infoScreen.style.display =
        "none";

    colorScreen.style.display =
        "flex";
};

feedbackBtn.onclick = function(){

    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSffsLOt7zFVRhnRclauylXdbPtlsNGqOgyoAIbOM96gwnPbCA/viewform?usp=publish-editor",
        "_blank"
    );
};

backInfoBtn.onclick = function(){

    colorScreen.style.display =
        "none";

    infoScreen.style.display =
        "flex";
};

homeBtn.onclick = function(){

    location.reload();
};

/* =========================
   PRINT BUTTON
========================= */

printBtn.onclick = function(){

    const printWindow =
        window.open('', '_blank');

    printWindow.document.write(`

        <html>

        <head>

            <title>
                Print Folk Art
            </title>

        </head>

        <body style="display:flex;justify-content:center;align-items:center;height:100vh;">

            <img src="${colorImage.src}" style="width:80%;max-width:700px;">

        </body>

        </html>

    `);

    printWindow.document.close();

    printWindow.print();
};

/* =========================
   ARTIST QUESTION DATABASE
========================= */

const artistQuestionDatabase = {

    gond: [

        {
            question:
                "Where did Gond art originate?",

            options: [
                "Kerala",
                "Madhya Pradesh",
                "Assam",
                "Rajasthan"
            ],

            answer:
                "Madhya Pradesh"
        },

        {
            question:
                "What is the capital of Madhya Pradesh?",

            options: [
                "Bhopal",
                "Patna",
                "Lucknow",
                "Jaipur"
            ],

            answer:
                "Bhopal"
        }

    ],

    warli: [

        {
            question:
                "Warli art belongs to which state?",

            options: [
                "Maharashtra",
                "Kerala",
                "Punjab",
                "Odisha"
            ],

            answer:
                "Maharashtra"
        },

        {
            question:
                "What is the capital of Maharashtra?",

            options: [
                "Mumbai",
                "Nagpur",
                "Bhopal",
                "Chennai"
            ],

            answer:
                "Mumbai"
        }

    ],

    madhubani: [

        {
            question:
                "Madhubani art originated in which state?",

            options: [
                "Bihar",
                "Assam",
                "Kerala",
                "Rajasthan"
            ],

            answer:
                "Bihar"
        },

        {
            question:
                "What is the capital of Bihar?",

            options: [
                "Patna",
                "Lucknow",
                "Dispur",
                "Jaipur"
            ],

            answer:
                "Patna"
        }

    ],

    kalamkari: [

        {
            question:
                "Kalamkari art belongs to which Indian states?",

            options: [
                "Andhra Pradesh and Telangana",
                "Kerala and Tamil Nadu",
                "Punjab and Haryana",
                "Bihar and Odisha"
            ],

            answer:
                "Andhra Pradesh and Telangana"
        },

        {
            question:
                "What is the capital of Andhra Pradesh?",

            options: [
                "Amaravati",
                "Hyderabad",
                "Bhopal",
                "Jaipur"
            ],

            answer:
                "Amaravati"
        }

    ],

    pattachitra: [

        {
            question:
                "Pattachitra art originated in which state?",

            options: [
                "Odisha",
                "Maharashtra",
                "Kerala",
                "Punjab"
            ],

            answer:
                "Odisha"
        },

        {
            question:
                "What is the capital of Odisha?",

            options: [
                "Bhubaneswar",
                "Patna",
                "Lucknow",
                "Chennai"
            ],

            answer:
                "Bhubaneswar"
        }

    ]

};

/* =========================
   QUIZ SYSTEM
========================= */

let currentQuestion = 0;

function getCurrentQuestions(){

    return artistQuestionDatabase[
        currentArt.id
    ];
}

function loadQuestion(){

    answerOptions.innerHTML = "";

    const questions =
        getCurrentQuestions();

    const currentData =
        questions[currentQuestion];

    questionText.innerText =
        currentData.question;

    currentData.options.forEach(option => {

        const button =
            document.createElement("button");

        button.innerText = option;

        button.classList.add("answerBtn");

        button.addEventListener("click", () => {

            checkAnswer(option);

        });

        answerOptions.appendChild(button);

    });
}

function checkAnswer(selectedAnswer){

    const questions =
        getCurrentQuestions();

    const currentData =
        questions[currentQuestion];

    if(selectedAnswer === currentData.answer){

        feedbackMessage.innerText =
            "Wonderful! Correct answer.";

        feedbackMessage.style.color =
            "green";

        currentQuestion++;

        setTimeout(() => {

            feedbackMessage.innerText = "";

            if(currentQuestion < questions.length){

                loadQuestion();

            }else{

                showRewardScreen();

            }

        }, 1200);

    }else{

        feedbackMessage.innerText =
            "Not quite. Try again!";

        feedbackMessage.style.color =
            "red";
    }
}
/* =========================
   REWARD SCREEN
========================= */

function showRewardScreen(){

    artistDialogue.innerText =
        "You completed the cultural challenge successfully!";

    questionText.innerText =
        "You received a traditional painting!";

    answerOptions.innerHTML = `

        <img
            src="${currentArt.image}"
            style="
                width:300px;
                border-radius:20px;
                margin-top:20px;
            "
        >

        <div style="margin-top:20px;">

            <button
                id="nextLevelBtn"
                class="answerBtn"
            >

                Continue to Level 3

            </button>

        </div>

    `;

    // BUTTON EVENT

    setTimeout(() => {

        const nextLevelBtn =
            document.getElementById("nextLevelBtn");

        nextLevelBtn.onclick = function(){

            artistScreen.style.display =
                "none";

            level3Screen.style.display =
                "block";

            startLevel3();

        };

    }, 100);

}
 
           
/* =========================
   LEVEL 3 SYSTEM
========================= */

const level3Screen =
    document.getElementById("level3Screen");

const level3HiddenImage =
    document.getElementById("level3HiddenImage");

const level3Canvas =
    document.getElementById("level3Canvas");

const level3Ctx =
    level3Canvas.getContext("2d");

const submitArtAnswer =
    document.getElementById("submitArtAnswer");

const artInput =
    document.getElementById("artInput");

const typingFeedback =
    document.getElementById("typingFeedback");

const level3HomeBtn =
    document.getElementById("level3HomeBtn");

const artClue =
    document.getElementById("artClue");
const reflectionScreen =
    document.getElementById(
        "reflectionScreen"
    );

const reflectionFeedback =
    document.getElementById(
        "reflectionFeedback"
    );

const badgeScreen =
    document.getElementById(
        "badgeScreen"
    );

const futureGamesBtn =
    document.getElementById(
        "futureGamesBtn"
    );
let level3Art;

/* =========================
   CREATE CLUE
========================= */

function generateClue(word){

    let clue = "";

    for(let i = 0; i < word.length; i++){

        if(i % 2 === 0){

            clue += word[i].toUpperCase();

        }else{

            clue += "_";
        }

        clue += " ";
    }

    return clue;
}

/* =========================
   OPEN LEVEL 3
========================= */



/* =========================
   START LEVEL 3
========================= */



    function startLevel3(){

    level3Art =
        arts[Math.floor(Math.random() * arts.length)];

    level3HiddenImage.src =
        level3Art.image;

    artClue.innerText =
        generateClue(level3Art.id);

    level3Canvas.width = 400;

    level3Canvas.height = 400;

    level3Ctx.globalCompositeOperation =
        "source-over";

    level3Ctx.clearRect(
        0,
        0,
        level3Canvas.width,
        level3Canvas.height
    );

    level3Ctx.fillStyle =
        "#7b2cbf";

    level3Ctx.fillRect(
    0,
    0,
    level3Canvas.width,
    level3Canvas.height
);

// ENABLE INPUT AREA

document.getElementById(
    "typingSection"
).style.pointerEvents = "auto";

}

/* =========================
   LEVEL 3 SCRATCH SYSTEM
========================= */

let level3Scratching = false;

// MOUSE EVENTS

level3Canvas.addEventListener(
    "mousedown",
    startLevel3Scratch
);

level3Canvas.addEventListener(
    "mouseup",
    stopLevel3Scratch
);

level3Canvas.addEventListener(
    "mouseleave",
    stopLevel3Scratch
);

level3Canvas.addEventListener(
    "mousemove",
    scratchLevel3
);

// TOUCH EVENTS

level3Canvas.addEventListener(
    "touchstart",
    startLevel3Scratch,
    { passive:false }
);

level3Canvas.addEventListener(
    "touchend",
    stopLevel3Scratch
);

level3Canvas.addEventListener(
    "touchmove",
    scratchLevel3Touch,
    { passive:false }
);

/* =========================
   START / STOP SCRATCH
========================= */

function startLevel3Scratch(){

    level3Scratching = true;
}

function stopLevel3Scratch(){

    level3Scratching = false;
}

/* =========================
   SCRATCH FUNCTIONS
========================= */

function scratchLevel3(e){

    if(!level3Scratching) return;

    const rect =
        level3Canvas.getBoundingClientRect();

    const x =
        e.clientX - rect.left;

    const y =
        e.clientY - rect.top;

    eraseLevel3(x, y);
}

function scratchLevel3Touch(e){

    e.preventDefault();

    if(!level3Scratching) return;

    const rect =
        level3Canvas.getBoundingClientRect();

    const touch =
        e.touches[0];

    const x =
        touch.clientX - rect.left;

    const y =
        touch.clientY - rect.top;

    eraseLevel3(x, y);
}

/* =========================
   ERASE LEVEL 3
========================= */

function eraseLevel3(x, y){

    level3Ctx.globalCompositeOperation =
        "destination-out";

    level3Ctx.beginPath();

    level3Ctx.arc(
        x,
        y,
        35,
        0,
        Math.PI * 2
    );

    level3Ctx.fill();

    level3Ctx.closePath();
}

/* =========================
   CHECK LEVEL 3 ANSWER
========================= */

submitArtAnswer.onclick = function(){

    console.log("SUBMIT CLICKED");
    const learnerAnswer =
        artInput.value
            .toLowerCase()
            .trim();

    const correctAnswer =
        level3Art.id
            .toLowerCase();

     if(true) {

        typingFeedback.innerHTML = `

            <p style="color:green;">

                Excellent cultural observation!

            </p>

            <button id="continueReflectionBtn">

                Continue to Cultural Reflection

            </button>

        `;
// CONTINUE TO REFLECTION

setTimeout(() => {

    const continueBtn =
        document.getElementById(
            "continueReflectionBtn"
        );

    continueBtn.onclick = function(){

        level3Screen.style.display =
            "none";

        reflectionScreen.style.display =
            "block";
    };

}, 100);
    }else{

        typingFeedback.innerHTML = `

            <p style="color:red;">

                Not quite. Observe carefully and try again.

            </p>

        `;
    }

};

 

        

/* =========================
   LEVEL 3 HOME BUTTON
========================= */

level3HomeBtn.onclick = function(){

    location.reload();
};

/* =========================
   GBL FLOW
========================= */

gblBtn.onclick = function(){

    infoScreen.style.display =
        "none";

    gblScreen.style.display =
        "flex";
};

startGBLBtn.onclick = function(){

    gblScreen.style.display =
        "none";

    artistScreen.style.display =
        "block";

    currentQuestion = 0;

    loadQuestion();
};
/* =========================
   REFLECTION SYSTEM
========================= */

const goodChoices =
    document.querySelectorAll(
        ".goodChoice"
    );

const rethinkChoices =
    document.querySelectorAll(
        ".rethinkChoice"
    );

/* GOOD CHOICES */

goodChoices.forEach((button) => {

    button.onclick = function(){

        reflectionFeedback.innerHTML = `

            <p style="color:green;">

                Wonderful! Supporting folk artists helps preserve
                India’s cultural heritage for future generations.

            </p>

            <button id="badgeBtn">

                Receive Ambassador Badge

            </button>

        `;

        setTimeout(() => {

            const badgeBtn =
                document.getElementById(
                    "badgeBtn"
                );

            badgeBtn.onclick = function(){

                reflectionScreen.style.display =
                    "none";

                badgeScreen.style.display =
                    "block";
            };

        }, 100);
    };

});

/* RETHINK CHOICES */

rethinkChoices.forEach((button) => {

    button.onclick = function(){

        reflectionFeedback.innerHTML = `

            <p style="color:#bc4749;">

                Traditional art forms survive when communities actively
                support artists and share cultural knowledge.

                Try reflecting once more.

            </p>

        `;
    };

});