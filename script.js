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

/* =========================
   ART DATABASE
========================= */

const arts = [

{
    id: "gond",

    name: "Gond Art",

    image: "assets/gond.png",

    outline: "assets/gondoutline.png",

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

let chancesLeft = 5;

optionBoxes.forEach((box) => {

    box.addEventListener("click", () => {

        const selectedArt =
            box.dataset.match;

        /* CORRECT */

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
   LEARN BUTTON
========================= */

learnBtn.onclick = function(){

    window.open(
        currentArt.tutorial,
        "_blank"
    );
};

/* =========================
   BUY BUTTON
========================= */

buyBtn.onclick = function(){

    window.open(
        currentArt.buy,
        "_blank"
    );
};

/* =========================
   COLOR BUTTON
========================= */

colorBtn.onclick = function(){

    infoScreen.style.display =
        "none";

    colorScreen.style.display =
        "flex";
};

/* =========================
   FEEDBACK BUTTON
========================= */

feedbackBtn.onclick = function(){

    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSffsLOt7zFVRhnRclauylXdbPtlsNGqOgyoAIbOM96gwnPbCA/viewform?usp=publish-editor",
        "_blank"
    );
};

/* =========================
   BACK BUTTON
========================= */

backInfoBtn.onclick = function(){

    colorScreen.style.display =
        "none";

    infoScreen.style.display =
        "flex";
};

/* =========================
   HOME BUTTON
========================= */

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

            <style>

                body{

                    display:flex;

                    justify-content:center;

                    align-items:center;

                    height:100vh;

                    margin:0;
                }

                img{

                    width:80%;

                    max-width:700px;
                }

            </style>

        </head>

        <body>

            <img src="${colorImage.src}">

        </body>

        </html>

    `);

    printWindow.document.close();

    printWindow.print();
};