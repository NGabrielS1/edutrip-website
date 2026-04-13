// Navbar js
var prevScrollpos = window.pageYOffset;
const scrollthreshold = window.innerHeight * 0.25;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else if (currentScrollPos > scrollthreshold) {
        document.getElementById("navbar").style.top = "-17vh";
    }
    prevScrollpos = currentScrollPos;
}

// Culinary Js
let currentDish = 0;
const dishDescs = [
    "Tarumizu is known for its local food culture, including delicious traditional Mochi. Mochi from Tarumizu is made from glutinous rice that is pounded until it becomes soft, smooth, and stretchy. It is often enjoyed with sweet fillings such as red bean paste or served grilled with soy sauce. Because Tarumizu is surrounded by rich natural resources and fresh ingredients, the mochi made there is known for its fresh taste and chewy texture.",
    "Karaage is one of the most popular foods in Japan. Karaage is made by marinating bite-sized pieces of chicken in soy sauce, garlic, and ginger, then coating them with starch and deep-frying them until crispy on the outside and juicy on the inside. It is commonly served with lemon and eaten as a snack, side dish, or in bento boxes. Because of its crunchy texture and rich flavor, karaage is loved by both locals and visitors across Japan.",
    "In Fukuoka, one unique snack is the cod roe–flavored Pretz, inspired by the region’s famous Mentaiko. These crunchy pretzel sticks are seasoned with the savory and slightly spicy taste of mentaiko, giving them a rich seafood flavor that is popular in the area. The snack, produced by Glico, is often bought as a souvenir because it represents one of Fukuoka’s most well-known local foods in a fun and convenient form. ",
    "Near Sakurajima, a unique local dish is horse meat Shabu-shabu. Thin slices of horse meat are quickly swished in a pot of hot broth and then dipped in flavorful sauces before eating. The meat is very tender and has a mild, slightly sweet taste. This dish is considered a regional specialty in Kagoshima Prefecture and is enjoyed for its delicate flavor and the interactive experience of cooking the meat at the table.",
    "",
    "Gyukatsu is a popular dish in Japan made from a breaded and deep-fried beef cutlet. The beef is usually coated in panko breadcrumbs and lightly fried so the outside becomes crispy while the inside remains tender and slightly rare. It is often served with shredded cabbage, rice, miso soup, and dipping sauces. Many restaurants also provide a small hot stone so diners can cook the beef further to their preferred level of doneness, making gyukatsu both flavorful and interactive to eat.",
]
const dishImages = [
    "./assets/mochi.png",
    "./assets/karage.png",
    "./assets/pretz.png",
    "./assets/horsemeat.png",
    "",
    "./assets/gyukatsu.png",
]
function chooseDish(dish) {
    currentDish = dish;
    window.location.href = "dish.html";
    localStorage.setItem("selectedDish", dish);
}

function backToMenu() {
    window.location.href = 'culinary.html';
}

currentDish = localStorage.getItem("selectedDish");
if (currentDish === null) {
    currentDish = 0;
} else {
    currentDish = parseInt(currentDish);
}

let table = document.getElementById("dining-table");
let mainDish = document.getElementById("main-dish");
let infoPlate = document.getElementById("info-plate");
let infoFood = document.getElementById("info-food");
function cookDish() {
    table = document.getElementById("dining-table");
    if (currentDish == 0 || currentDish == 3) {
        table.innerHTML = "<img id='main-dish'><div onload='cookDish()' id='info-plate'><p id='info-food'></p></div>";
        mainDish = document.getElementById("main-dish");
        infoFood = document.getElementById("info-food");
        mainDish.src = dishImages[currentDish];
        infoFood.innerHTML = dishDescs[currentDish];
    }
    else if (currentDish == 4) {
        document.getElementById("banner-dish").innerHTML = "Homecooked meals by our homestay parents!";
        table.innerHTML = "<img id='side-dish' src='./assets/salad.png'><img id='side-dish' src='./assets/chickencurry.png'>";
    }
    else {
        table.innerHTML = "<div onload='cookDish()' id='info-plate'><p id='info-food'></p></div><img id='main-dish'>";
        mainDish = document.getElementById("main-dish");
        infoFood = document.getElementById("info-food");
        mainDish.src = dishImages[currentDish];
        infoFood.innerHTML = dishDescs[currentDish];
    }
}