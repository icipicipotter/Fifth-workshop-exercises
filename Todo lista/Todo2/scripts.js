function setList(newListItem) {
    $("ul").append(`<li>${newListItem}</li>`);
    $('#list').val('');
    $("ul").append('<button id="ok">\u2713</button>')
    $("ul").append('<button id="delete">\u00D7</button>')
   
}

$("ul").click(function() {
    $(this).css("text-decoration", "line-through").css("color", "grey")
})

$("#delete").click(function() {
    $("li").remove()
})

/*Ne feledd, hogy amikor új todo elemet adsz hozzá a listához akkor a gombokat is hozzá kell adnod amiknek
a click eseményét be kell állítani
Ez megoldható például úgy, hogy a todo elemekhez és a gombokhoz hozzárendelsz egy id-t, pl: (todo-1, button-1)
De általánosan is beállíthatod a click lekezelését bármelyik gombnak
Ebben az esetben a click eseményt a todokat tartalmazó container elemen kell lekezelned (pl: .todos-container)
És pontosítanod, hogy pontosan milyen elemek click eseményét szeretnéd kezelni egy másik selectorral
(pl: .delete-button)
Ezzel az általános módszerrel viszont tudnunk kell, hogy melyik todo elemhez tartozó gomb lett megnyomva
ezt pedig megállapíthatod az $(event.target) segítségével (ahol az event a függvény paramétere):*/

