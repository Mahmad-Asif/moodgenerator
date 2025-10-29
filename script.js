function getSad() {
  let msg = `You’ve been strong for too long.
It’s okay to rest for a while.
Even the sun sets to rise again.`;

  document.getElementById("sadMsg").innerText = msg;

  let card = document.getElementById("sad");
  card.style.height = "250px";
  card.style.width = "300px";
}
//end of a getsad function

// start of a getPeace function
function getPeace() {
  let msg2 = `Breathe slowly.
You don’t have to rush anywhere.
Peace is already within you — just listen.`;

  document.getElementById("peaceMsg").innerText = msg2;
  let card = document.getElementById("peace");
  card.style.height = "250px";
  card.style.width = "300px";
}

// start of a getmotivation function
function getMotivation() {
  let quotes = [
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Push yourself because no one else is going to do it for you.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Dream big. Start small. Act now. — Robin Sharma",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Doubt kills more dreams than failure ever will. — Suzy Kassem",
    "Discipline is choosing between what you want now and what you want most.",
    "When you feel like quitting, remember why you started.",
  ];

  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("motivationMsg").innerText = quotes[randomIndex];

  let card = document.getElementById("motivation");
  card.style.height = "250px";
  card.style.width = "320px";
  card.style.transition = "0.3s ease";
}

function getLazy() {
  let words = [
    "Don’t watch the clock; do what it does. Keep going. ",
    "It always seems impossible until it’s done. ",
    "Push yourself because no one else is going to do it for you.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Dream big. Start small. Act now. ",
    "You don’t have to be great to start, but you have to start to be great. ",
    "Doubt kills more dreams than failure ever will. ",
    "Discipline is choosing between what you want now and what you want most.",
    "When you feel like quitting, remember why you started.",
  ];

  let random = Math.floor(Math.random() * words.length);
  document.getElementById("getLazyMsg").innerText = words[random];

  let card = document.getElementById("lazy");
  card.style.height = "250px";
  card.style.width = "350px";
  card.style.transition = "0.3s ease";
}


// starting of a third function

function getTired(){
    let words=["You don’t have to be great to start, but you have to start to be great. ",
    "Doubt kills more dreams than failure ever will. ",
    "Discipline is choosing between what you want now and what you want most.",
    "When you feel like quitting, remember why you started.",
    "You don’t have to be great to start, but you have to start to be great. ",
    "Doubt kills more dreams than failure ever will. ",
    "Discipline is choosing between what you want now and what you want most.",
    "When you feel like quitting, remember why you started.",];


    let random=Math.floor(Math.random()*words.length);
    document.getElementById("tiredMsg").innerText=words[random];
 let card = document.getElementById("tired");
  card.style.height = "250px";
  card.style.width = "350px";
  card.style.transition = "0.3s ease";

}