const sections = document.querySelectorAll("section");

window.onscroll = function () {
  scrollFunction();
};

function sendMail(req, res) {
  let message =
    req.query.message || req.body.message || "BruTech Contact Request";
  res.status(200).send(message);
}

function scrollFunction() {
  let scrollTopButton = document.getElementById("scrollTopButton");
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}
