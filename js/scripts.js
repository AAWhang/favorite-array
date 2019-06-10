$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {
    var favoriteThings = [$("#favoriteThings1").val(), $("#favoriteThings2").val(), $("#favoriteThings3").val(), $("#favoriteThings4").val(), $("#favoriteThings5").val()];
    var favoriteThingsAlter = [favoriteThings[1], favoriteThings[0], favoriteThings[2]];

    alert(favoriteThings);
    alert(favoriteThingsAlter);

    var favoritePushed = [];
    alert(favoritePushed);
    favoritePushed.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);
    alert(favoritePushed);

    $("#favoriteContentPrint").append("<ul>" + "<li>" + favoritePushed[0] + "</li>" + "<li>" + favoritePushed[1] + "</li>" + "<li>" + favoritePushed[2] + "</li>" + "</ul>");


   event.preventDefault();
  });
});
