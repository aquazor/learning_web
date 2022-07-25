function showText(el) {
  if (el.previousElementSibling.clientHeight === 85) {
    el.previousElementSibling.style.height = "100%";
    el.innerHTML = "Show less...";
  } else {
    el.previousElementSibling.style.height = "85px";
    el.innerHTML = "Read more...";
  }
}
(function () {
  let user_name = document.getElementById("user_name");
  user_name.placeholder = user_name.innerHTML = "KEK";
  console.log(user_name.placeholder);
})();
