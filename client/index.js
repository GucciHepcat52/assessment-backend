const complimentButton = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const favoriteClassButton = document.getElementById("favoriteClassButton");
const firstSection = document.getElementById("first-section");
const addQuoteButton = document.getElementById("form-button");
const removeQuoteButton = document.getElementById("form-button");

const complimentClicker = () => {
  axios
    .get("http://localhost:4000/api/compliment/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => console.log(error));
};

complimentButton.addEventListener("click", complimentClicker);

const fortuneClicker = () => {
  axios
    .get("http://localhost:4000/api/fortune/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => console.log(error));
};

fortuneButton.addEventListener("click", fortuneClicker);

const favoriteClicker = () => {
  axios
    .get("http://localhost:4000/api/favorite")
    .then((res) => {
      console.log(res);
      const classContainer = document.createElement("div");
      classContainer.classList.add("class-container");

      classContainer.innerHTML = `<img src=${res.data.imageURL} alt='class image' class='class-image' />
            <p class='class-title'>${res.data.name}</p>`;
      firstSection.appendChild(classContainer);
    })
    .catch((error) => console.log(error));
};

favoriteClassButton.addEventListener("click", favoriteClicker);

const addQuoteHandler = (event) => {
  event.preventDefault();

  let quote = document.getElementById("quote");
  let author = document.getElementById("author");

  let bodyObj = {
    quote: quote.value,
    author: author.value,
  };

  axios
    .post("http://localhost:4000/api/quotes", bodyObj)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));

  quote.value = "";
  author.value = "";
};

addQuoteButton.addEventListener("click", addQuoteHandler);

const removeQuoteHandler = (event) => {
    event.preventDefault();
  
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
  
    let bodyObj = {
      quote: quote.value,
      author: author.value,
    };
  
    axios
      .delete("http://localhost:4000/api/quotes", bodyObj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  
    quote.value = "";
    author.value = "";
  };