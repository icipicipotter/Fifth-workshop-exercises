let i=1;
$("#increase").on("click", function() {
    $("#count").text(i)
    i++
})

let j=0;
$("#decrease").on("click", function() {
    $("#count").text(j)
    j=j-1
})