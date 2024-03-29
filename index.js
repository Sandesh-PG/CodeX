// Carousel Animation ---------------------------

var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    scrollPosition = scrollPosition + cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});

$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition = scrollPosition - cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});

// ---------------------------

const trainingSec = document.querySelector(".codex-training");
const dismiss = $(".btn-dismiss");

// Training section dismiss
dismiss.on("click", function () {
  trainingSec.style.display = "none";
});

// Scroll To Top ---------------------------

$(".btn-top").on("click", function () {
  document.documentElement.scrollTop = 0;
});

// ---------------------------

// NavBar Toggle ---------------------------
var navLinks = $(".nav-link");
var active = $(".active");

for (let i = 0; i < navLinks.length; i++) {
  $(document).on("click", ".nav-link", function () {
    var navLinks = $(".nav-link");
    var active = $(".active");

    active.removeClass("active");
    $(this).addClass("active");
  });
}

// ---------------------------
