const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const obj = [
  {},
  {
    q1: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    p1: "Nelson Mandela",
  },
  {
    q2: "The way to get started is to quit talking and begin doing.",
    p2: "Walt Disney",
  },
  {
    q3: "Your time is limited, don't waste it living someone else's life.",
    p3: "Steve Jobs",
  },
  {
    q4: "If life were predictable it would cease to be life, and be without flavor.",
    p4: "Eleanor Roosevelt",
  },
  {
    q5: "Life is what happens when you're busy making other plans.",
    p5: "John Lennon",
  },
  {
    q6: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    p6: "Mother Teresa",
  },
  {
    q7: "In the end, it's not the years in your life that count. It's the life in your years.",
    p7: "Abraham Lincoln",
  },
  {
    q8: "You only live once, but if you do it right, once is enough.",
    p8: "Mae West",
  },
  {
    q9: "The only way to do great work is to love what you do.",
    p9: "Steve Jobs",
  },
  {
    q10: "In the midst of winter, I found there was, within me, an invincible summer.",
    p10: "Albert Camus",
  },
];

console.log(obj[2].q2);

btn.addEventListener("click", function () {
  const randomNum = Math.ceil(Math.random(10) * 10);
  quote.innerText = obj[randomNum][`q${randomNum}`];
  person.innerText = obj[randomNum][`p${randomNum}`];
});
