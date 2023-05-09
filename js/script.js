const showAll = document.getElementById("show-all");
const deleteAll = document.getElementById("delete-all");
const resultBox = document.getElementById("result-box");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close-btn");

let dino = [
    {
        id: 0,
        name: "T Rex",
        rating: "10/10",
        image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3QtcmV4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6IjEyMDAifX19",
        alt: "t-rex",
        description: "Tyrannosaurus rex, or T-rex for short, was one of the largest carnivorous dinosaurs to ever exist. It roamed the earth during the late Cretaceous period, around 68 to 66 million years ago. With its massive head, powerful jaws, and sharp, serrated teeth, T-rex was a formidable predator. It stood up to 20 feet tall and weighed up to 14,000 pounds. T-rex had short arms with two-fingered hands and long, powerful legs that allowed it to move quickly. Its vision and sense of smell were also highly developed, making it an efficient hunter. Despite its intimidating size and strength, T-rex is believed to have been a social animal, living in groups and possibly even caring for its young."

    },
    {
        id: 1,
        name: "Stegosaurus",
        rating: "8/10",
        image: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/podcasts/Curiosity/2020/3/Stegosaurus_Getty_Images_SQ.png.rend.hgtvcom.476.476.suffix/1583192968245.png",
        alt: "stegosaurus",
        description: "Stegosaurus was a herbivorous dinosaur that lived during the Late Jurassic period, around 150 million years ago. It was a large, four-legged animal with distinctive plates on its back and spikes on its tail. The plates, which were arranged in two rows, may have been used for display or to regulate body temperature. The tail spikes, known as thagomizers, were likely used for self-defense against predators. Stegosaurus had a small head and a relatively small brain, but it had a highly developed sense of smell. Its teeth were small and peg-like, and it likely fed on low-growing vegetation. Despite its size and armored appearance, Stegosaurus was not a particularly fast or agile dinosaur."

    },
    {
        id: 2,
        name: "Pterodacty",
        rating: "7.5/10",
        image: "https://www.biosphereonline.com/wp-content/uploads/2020/04/pterodactyl.jpeg",
        alt: "pterodacty",
        description: "Pterodactyl is a generic term used to refer to various species of flying reptiles that lived during the Mesozoic Era, from around 228 to 66 million years ago. These creatures are also known as pterosaurs, and they were the first vertebrates to evolve powered flight. Pterodactyls had a wingspan that ranged from a few inches to over 30 feet, depending on the species. They had elongated jaws with sharp teeth, which they likely used to catch fish and other small animals. Despite their reptilian appearance, pterodactyls were warm-blooded and had a unique respiratory system that allowed them to fly for long periods of time."
    }
]

showAll.addEventListener("click", function () {
    showDino()
})

deleteAll.addEventListener("click", function () {
    resultBox.innerHTML = ""
})


function showDino() {
    for (let i = 0; i < dino.length; i++) {
        resultBox.innerHTML += `
        <div id="result">
        <img src=${dino[i].image} alt=${dino[i].alt}>
        <div class="result-element">
        <h2>${dino[i].name}</h2>
        <p>${dino[i].rating}</p>
        <button data-id=${dino[i].id} 
        class="moreinfo-btn">
        More info
        </button>
        </div>
        
        </div>
        `
    }
    collectButtons()
}

function openModal() {
    modal.classList.toggle("active");
}
closeBtn.addEventListener("click", function () {
    openModal()
})

function collectButtons() {
    const moreInfoBtn = document.getElementsByClassName("moreinfo-btn");
    for (let i = 0; i < moreInfoBtn.length; i++) {
        moreInfoBtn[i].addEventListener("click", function () {
            let currentButtonId = moreInfoBtn[i].dataset.id;
            let modalValue = dino[currentButtonId].description;
            let modalName = dino[currentButtonId].name;
            modalContent.innerHTML = `
            <h1>About ${modalName}</h1>
            <p>${modalValue}<p>
            `
            openModal();

        })
    }
}




