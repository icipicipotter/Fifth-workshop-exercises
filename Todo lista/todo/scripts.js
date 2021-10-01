function setList(newListItem) {
  if(newListItem == "") return alert("Írj be valamit!");
  $("ul").append(`<li>${newListItem} <div class='btngroup'><button class='checkbtn'><img src='cdn/check.svg' class='check' width='30px' height='30px'></button><button class='deletebtn'><img src='cdn/delete.svg' class='delete' width='30px' height='30px'></button></div></li>`);
  $('#list').val('');
};

$("ul").on("click", ".delete", function() {
  $(this).closest("li").remove()
});

$("ul").on("click", ".check", function() {
  $(this).closest("li").css("opacity", "50%")
})
