const quotes = [{}];
let globalId = 0;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "You have happiness in your future",
      "Positivity is something that will bless you in your life",
      "A faithful friend is a strong defense",
      "A soft voice may be awfully persuasive",
      "Adventure can be real happiness",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },
  getFavoriteClass: (req, res) => {
    const favClass = {
      name: "Warrior",
      imageURL:
        "https://lostark.wiki.fextralife.com/file/Lost-Ark/warrior-class-lost-ark-wiki-guide-150.jpg",
    };
    res.status(200).send(favClass);
  },
  createQuote: (req, res) => {
    let { quote, author } = req.body;
    let newQuote = {
      id: globalId,
      quote,
      author,
    };
    quotes.push(newQuote);
    res.status(200).send(quotes);
    globalId++;
  },
  deleteQuote: (req, res) => {
    const index = quotes.findIndex((element) => element.id === +req.params.id);
    quotes.splice(index, 1);
    res.status(200).send(quotes);
  },
};
