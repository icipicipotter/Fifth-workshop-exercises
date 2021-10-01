/*1. Feladat
Készíts egy weboldalt
Adj egy gombot az oldal body eleméhez
Illeszd be a jQuery-t
Írj egy scriptet a body végén:
rendelj egy eseményfigyelőt (event listener) a gombhoz
írd ki az “Igen, most rámkattintottál” üzenetet a parancssorra (console), mikor a felhasználó rákattint a gombra
2. Feladat
Adj egy másik gombot is a weboldalhoz
Mikor a felhasználó rákattint a második gombra, változtasd meg az első gomb feliratát
3. Feladat
Adj egy harmadik gombot a weboldalhoz
Mikor a felhasználó rákattint erre a gombra, változtasd meg mindhárom gomb háttérszínét*/

$("#gomb1").click(() => {
    console.log("Igen, most rámkattintottál")
})

$("#gomb2").click(() => {
  $("#gomb1").text("gombocska")
})

$("#gomb3").click(() => {
  $(".button").css("background-color", "pink")
})

/*1. Feladat
Adj egy beviteli mezőt az előző weboldaladhoz!
Az elem alapértelmezett (default) értéke legyen “blue”
Mikor a felhasználó rákattint az utolsó gombra:
a beviteli mező értéke legyen kiolvasva,
a gomb háttérszíne (background-color) legyen megváltoztatva a megadott színre!
Próbáld ki, működik-e különböző színekkel!*/ 

function setColor(newColor) {
  $("#gomb4").css("background-color", newColor);
}

/*2. Feladat(Szorgalmi)
Most, hogy a gomb színe megváltozik bármikor, mikor új szín kerül az input mezőbe,
Változtasd meg a gomb működését, hogy az első változtatás után ne lehessen rákattintani!
Így legfeljebb csak egyszer változtathatjuk meg a gomb színét.*/ 

function setColor1(newColor) {
  $("#gomb5").css("background-color", newColor);
}

$("#color").on("change", function() {
  $(this).attr("readonly", true)
})