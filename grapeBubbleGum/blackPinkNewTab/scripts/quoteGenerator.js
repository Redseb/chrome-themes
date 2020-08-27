const quote = document.getElementById("quote");

const quotes = [
    "What will it be today?",
    "Welcome",
    "Have a good day",
    "Don't forget to stand up every now and then",
    ":)",
    "Remember to eat a balanced diet",
    "Keep your back straight",
    "Take a couple of deep breathes",
    "Try to go to bed before 10:00PM",
    "Remember to exercise",
    "Try to do household tasks, work, and exercise everyday",
    ""
]


quote.innerHTML = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
