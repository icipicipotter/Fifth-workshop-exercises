/*Hozz létre változókat a következő nevekkel és értékekkel:
color: purple
number: 10
word: cool
Változtasd meg az első doboz háttérszínét lilára, ha a color változó értéke purple
Változtasd meg a második HTML elem szövegét az alábbi kritérium alapján:
ha a number nagyobb, mint 100: wow, de nagy szám
különben: ez csak egy közönséges szám
Változtasd meg a harmadik elem szövegét arra, hogy A DOM Ereje, ha a word értéke az, hogy cool, különben pedig változtasd meg erre a negyedik elem szövegét*/


let color = "purple";
let number = 10;
let word = "cool";

if (color == "purple") {
    $('.north').css("background", "purple");
}

if (number > 100) {
        $(".east").text("wow, de nagy szám")
    } else {$(".east").text("ez csak egy közönséges szám")
}

if (word == "cool") {
        $(".south").text("A DOM Ereje")
    } else {$(".west").text("A DOM Ereje")
}

