const quote = document.getElementById("quote");

const quotes = [
    "Can I borrow banana?",
    "Ooo oo ah ah",
    "Yellow is the most sophisticated color",
    "Monkey baby monkey baby monkey baby"
]


quote.innerHTML = quotes[Math.floor(Math.random() * Math.floor(quotes.length))].toLowerCase();
