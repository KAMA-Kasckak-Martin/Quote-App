let btn = document.querySelector("button");
let randomq = document.querySelector("#random");
let author = document.querySelector("#author");

fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomq.innerText = data.data[0].quoteText;
    author.innerText = "-" + data.data[0].quoteAuthor;
  });

btn.addEventListener("click", () => {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      randomq.innerText = data.data[0].quoteText;
      author.innerText = "-" + data.data[0].quoteAuthor;
    });
});
