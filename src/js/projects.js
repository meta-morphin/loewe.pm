function setLinkDescription(description) {
  document.querySelector(".link-box__description").innerHTML = description;
}
document.querySelector(".project__icon-link.github").forEach((el, ind, arr) => {
  el.addEventListener("hover", setLinkDescription("View source on GitHub"));
});
document.querySelector(".project__icon-link.web").forEach((el, ind, arr) => {
  el.addEventListener("hover", setLinkDescription("View live site"));
});