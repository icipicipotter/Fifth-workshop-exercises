function setList(newListItem) {
    $("ul").append(`<li>${newListItem}</li>`);
    $('#list').val('');
}

$("ul").on("click", "li", function() {
    $(this).css("text-decoration", "line-through")
});
