const body = document.body;
const switch_mode = document.querySelector("#switchButton i");
const navbar_toggler = document.getElementById("navbar-toggler");

let mode = localStorage.getItem("darkmode");
if (mode == "true") {
  body.classList.add("dark");
  switch_mode.className = "bi bi-brightness-high";
}
switch_mode.addEventListener("click", () => {
  let mode = body.classList.toggle("dark");
  switch_mode.classList.toggle("bi-moon");
  switch_mode.classList.toggle("bi-brightness-high");
  //save mode
  localStorage.setItem("darkmode", mode);
});

function showmenu() {
  var primenu = document.getElementById("primary-menu");
  if (body.classList.toggle("showmenu")) {
    body.classList.add("showmenu");
    // không cho scroll khi mở menu ở media 992px
    $("html, body").css({
      overflow: "hidden",
      height: "auto",
    });
    primenu.classList.toggle("animate__fadeInDown");
    primenu.classList.add("animate__fadeInDown");
  } else {
    // cho phép scroll khi tắt menu
    $("html, body").css({
      overflow: "auto",
      height: "auto",
    });
    primenu.classList.toggle("animate__fadeInDown");
    primenu.classList.add("animate__fadeInDown");
  }
}

// *Search*

var searchBtn = document.querySelector("#btn-searchcr .btn-search");
var closeBtn = document.querySelector("#btn-searchcr .btn-search .close-icon");
var searchInput = document.querySelector(
  "#btn-searchcr .btn-search .btn-search__input"
);

searchBtn.addEventListener("click", function () {
  $("#btn-searchcr .btn-search").css({
    cursor: "default",
  });

  $("#btn-searchcr .btn-search__background").css({
    transform: "scale(100)",
  });

  $("#btn-searchcr .btn-search .magnifying-glass-icon").css({
    opacity: "0",
    "pointer-events": "none",
  });

  $("#btn-searchcr .btn-search .close-icon").css({
    opacity: "1",
    transform: "rotate(-90deg)",
    cursor: "pointer",
    "pointer-events": "all",
  });

  $("#btn-searchcr .btn-search .btn-search__input").css({
    opacity: "1",
    transform: "translateX(0)",
    "pointer-events": "all",
  });
  searchInput.removeAttribute("disabled");
  searchInput.focus();
});

closeBtn.addEventListener("click", function () {
  setTimeout(function () {
    $("#btn-searchcr .btn-search").css({
      cursor: "pointer",
    });

    $("#btn-searchcr .btn-search__background").css({
      transform: "scale(1)",
    });

    $("#btn-searchcr .btn-search .magnifying-glass-icon").css({
      opacity: "1",
      "pointer-events": "all",
    });

    $("#btn-searchcr .btn-search .close-icon").css({
      opacity: "0",
      transform: "rotate(0deg)",
      cursor: "default",
      "pointer-events": "none",
    });

    $("#btn-searchcr .btn-search .btn-search__input").css({
      opacity: "0",
      transform: "translateX(40px)",
      "pointer-events": "none",
    });

    searchInput.disabled = "true";
  }, 10);
});
