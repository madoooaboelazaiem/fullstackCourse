$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if (
      $("#carouselButton")
        .children("button")
        .children("span")
        .hasClass("fa-pause")
    ) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton")
        .children("button")
        .children("span")
        .removeClass("fa-pause");
      $("#carouselButton")
        .children("button")
        .children("span")
        .addClass("fa-play");
    } else if (
      $("#carouselButton")
        .children("button")
        .children("span")
        .hasClass("fa-play")
    ) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton")
        .children("button")
        .children("span")
        .removeClass("fa-play");
      $("#carouselButton")
        .children("button")
        .children("span")
        .addClass("fa-pause");
    }
  });
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
  $("#reserveButton").click(function () {
    $("#reservationModal").modal("show");
  });
});
