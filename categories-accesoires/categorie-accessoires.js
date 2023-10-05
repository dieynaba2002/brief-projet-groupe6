// Script pour faire apparaitre le menu en liste ou en block
// Affichage en liste 
list = document.querySelector(".categorie-list");

// Affichage en block 
block = document.querySelector(".categorie-blok");

first = document.getElementById("fist-list-cart");
second = document.getElementById("second-list-cart");

// Affichage en liste
block.addEventListener('click' ,()=>{
    first.style.display='block';
    second.style.display='none';
})

// Affichage en block
list.addEventListener('click' ,()=>{
    second.style.display='block';
    first.style.display='none';
})


list.onclick = function(){
    menu2 = document.querySelector(".second-list-cart");
    menu2.classList.add("second-list-cart-active");
    alert("Selectionner") 
}

// Filtrer les categories 
const all  = document.querySelectorAll('.categorieItem');

// Selection des boutons 
const btnFourniture = document.querySelector('.fourniture');

const btnBag = document.querySelector('.btn-bag');
const btnShoes = document.querySelector('.btn-shoes');
const btnWatch = document.querySelector('.btn-watch');
const btnTshirt = document.querySelector('.btn-tshirt');
const btnShirt = document.querySelector('.btn-shirt');

// Selection des differentes categories 
const fourniture = document.querySelectorAll('.fourniture');
const bag = document.querySelectorAll('.bag');
const shoes = document.querySelectorAll('.shoes');
const watch = document.querySelectorAll('.watch');
const tshirt = document.querySelectorAll('.tshirt');
const shirt = document.querySelectorAll('.shirt');

// Écouteurs d'événements pour les boutons de filtrage
btnFourniture.addEventListener('click', showFourniture);
btnBag.addEventListener('click', showBag);
btnShoes.addEventListener('click', showShoes);
btnWatch.addEventListener('click', showWatch);
btnTshirt.addEventListener('click', showTshirt);
btnShirt.addEventListener('click', showShirt);

// Les fonctions de filtrage 
// Tout 
function showFourniture() {
    all.forEach(element => {
        // alert("Bon");
        if (!element.classList.contains('categorieItem')) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });

    const activeButton = document.querySelector('.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }            
    btnFourniture.classList.add('active');
}

// Les bags 
function showBag() {
    all.forEach(element => {
        // alert("Bon");
        if (!element.classList.contains('bag')) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });

    const activeButton = document.querySelector('.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }            
    btnBag.classList.add('active');
}


// Les shoes
function showShoes() {
    all.forEach(element => {
        // alert("Bon");
        if (!element.classList.contains('shoes')) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });

    const activeButton = document.querySelector('.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }            
    btnShoes.classList.add('active');
}

function showWatch() {
    all.forEach(element => {
        if (!element.classList.contains('watch')) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });

    const activeButton = document.querySelector('.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }            
    btnWatch.classList.add('active');
}

function showShirt() {
    all.forEach(element => {
        if (!element.classList.contains('shirt')) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });

    const activeButton = document.querySelector('.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }            
    btnShirt.classList.add('active');
}

function showTshirt() {
    all.forEach(element => {
        if (!element.classList.contains('tshirt')) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });

    const activeButton = document.querySelector('.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }            
    btnTshirt.classList.add('active');
}