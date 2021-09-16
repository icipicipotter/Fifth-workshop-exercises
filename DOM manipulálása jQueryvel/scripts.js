/*1.)
Hozz létre egy tömböt, ami tartalmazza a saját neved, valamint azon kívül néhány másik nevet is
A forEach ciklus használatával add hozzá a neveket egy listához (<ul>)
(Szorgalmi) A saját neved legyen félkövér*/

let names = ["<strong>Ági</strong>", "Domi", "Lea", "Dius", "Lili"]

names.forEach((names) => {
  $("ul").append(`<li>${names}</li>`)
})

/*2.)
Adj új tartalmat az oldal végéhez:
a title legyen egy fejlécben (pl. <h1>),
a text pedig egy bekezdésben (<p>)*/

let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

$('body').append(
  `<h1>${additionalBlock.title}</h1>`,
  `<p>${additionalBlock.text}</p>`
)