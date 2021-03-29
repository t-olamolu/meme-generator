const memeForm = document.querySelector("#meme");

memeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let urlInput = document.querySelector("#imageupload").value;
  (src = urlInput), (img = document.createElement("img"));
  img.src = src;

  let topText = document.querySelector("#top-text").value;
  let topTextDiv = document.createElement("div");
  topTextDiv.classList.add("text", "top");
  topTextDiv.innerText = topText;

  let bottomText = document.querySelector("#bottom-text").value;
  let bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("text", "bottom");
  bottomTextDiv.innerText = bottomText;

  const memeLi = document.createElement("li");
  memeLi.classList.add("meme-img");

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-meme");
  deleteButton.innerText = "delete meme";
  deleteButton.style.color = "aqua";

  const liMemes = document.querySelector(".canvas");
  liMemes.appendChild(memeLi);
  memeLi.appendChild(img);
  memeLi.appendChild(topTextDiv);
  memeLi.appendChild(bottomTextDiv);
  memeLi.appendChild(deleteButton);

  memeForm.reset();

  function remove(event) {
    event.target.parentNode.remove();
  }

  liMemes.addEventListener("click", remove, false);
});
