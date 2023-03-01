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

const li = document.querySelectorAll('li');
const kubtn = document.querySelector('#ku');
const enbtn = document.querySelector('#en');


function changelanguage(userlang) {
    let language = userlang;
    for (let i = 0; i < li.length; i++) {
        const dataset = li[i].dataset.translate;
        li[i].textContent = translate[language][dataset];

    }

}

kubtn.addEventListener("click", changelanguage.bind(this, "ku"));
enbtn.addEventListener("click", changelanguage.bind(this, "en"));