const sections = document.querySelectorAll("section");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const arrowTop = document.getElementById("arrowTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowTop.classList.add("show");
  } else {
    arrowTop.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollDown() {
  document.getElementById("services").scrollIntoView();
}

function sendMail(req, res) {
  let message =
    req.query.message || req.body.message || "BruTech Contact Request";
  res.status(200).send(message);
}
