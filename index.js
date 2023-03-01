const translate = {
    ku: {
        home: "سەرەکی",
        products: "بەرهەمەکان",
        about: "دەربارە",
        contact: "پەیوەندی",
    },
    en: {
        home: "home",
        products: "products",
        about: "about",
        contact: "contact",
    },
};

// const language = localStorage.getItem("userlanguage") || "ku"; //agar zmany bakarheanabw bash agar na byka kurdy
localStorage.removeItem("userlanguage");

const li = document.querySelectorAll('li');
const kubtn = document.querySelector('#ku');
const enbtn = document.querySelector('#en');


function changelanguage(userlang) {
    for (let i = 0; i < li.length; i++) {
        const dataset = li[i].dataset.translate; //leara data-translate'man wargrtwatawe
        li[i].textContent = translate[userlang][dataset]; //contentakamin krdwa ba yakeak le property'yakany objectaca

    }

    localStorage.setItem("userlanguage", userlang);

}

kubtn.addEventListener("click", changelanguage.bind(this, "ku"));
enbtn.addEventListener("click", changelanguage.bind(this, "en"));

// changelanguage(language);