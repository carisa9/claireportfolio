const inputs = document.querySelectorAll(".contact-input");

inputs.forEach(ipt => {
ipt.addEventListener("focus", ()=> {
ipt.parentNode.classList.add("focus");
ipt.parentNode.classList.add("full");
});
ipt.addEventListener("blur", () => {
  if (ipt.value == ""){
    ipt.parentNode.classList.remove("full")
  }
  ipt.parentNode.classList.remove("focus")

});
});