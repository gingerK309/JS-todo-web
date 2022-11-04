const quotes = document.querySelector(".quotes");
//API 이용
const URL = "https://api.adviceslip.com/advice";
fetch(URL)
  .then((response) => response.json())
  .then((quote) => {
    quotes.innerText = `- ${quote.slip.advice}`;
  });
