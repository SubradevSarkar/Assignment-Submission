let cards = [
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e1c8dd36471685.571e1fa3b4817.jpg",
    value: 1,
    status: "closed",
  },
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e1c8dd36471685.571e1fa3b4817.jpg",
    value: 1,
    status: "closed",
  },
  {
    image:
      "https://cdn.dribbble.com/users/2548534/screenshots/5251082/fb_img_1519825850751_1x.jpg",
    value: 2,
    status: "closed",
  },
  {
    image:
      "https://cdn.dribbble.com/users/2548534/screenshots/5251082/fb_img_1519825850751_1x.jpg",
    value: 2,
    status: "closed",
  },
  {
    image:
      "https://i.pinimg.com/originals/bf/16/4b/bf164b01a55e803ea13bff190df61c1d.jpg",
    value: 3,
    status: "closed",
  },
  {
    image:
      "https://i.pinimg.com/originals/bf/16/4b/bf164b01a55e803ea13bff190df61c1d.jpg",
    value: 3,
    status: "closed",
  },
  {
    image:
      "https://www.desktopbackground.org/p/2015/02/04/897706_iron-man-iphone-wallpapers-mobile-wallpapers_1000x1600_h.jpg",
    value: 4,
    status: "closed",
  },
  {
    image:
      "https://www.desktopbackground.org/p/2015/02/04/897706_iron-man-iphone-wallpapers-mobile-wallpapers_1000x1600_h.jpg",
    value: 4,
    status: "closed",
  },
  {
    image:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871567-aif3.jpg?resize=480:*",
    value: 5,
    status: "closed",
  },
  {
    image:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871567-aif3.jpg?resize=480:*",
    value: 5,
    status: "closed",
  },
];

let temp;
for (let i = cards.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  temp = cards[i];
  cards[i] = cards[j];
  cards[j] = temp;
}
let cardcopy = cards;

function displayCards(data) {
  let cardsString = "";

  data.forEach(function (card, index) {
    cardsString += `
        <div class="card" id="card" style="background-image:url('${card.image}')">
            <div class="overlay ${card.status}" onclick="openCard(${index})"></div>
        </div>
        `;
  });

  document.getElementById("cards").innerHTML = cardsString;
}

displayCards(cards);

let cardCount = 1;
let val1 = null,
  val2 = null;
let score = 0;
function openCard(index) {
  cards[index].status = "open";

  if (cardCount === 1) {
    val1 = cards[index].value;
    cardCount++;
  } else if (cardCount === 2) {
    val2 = cards[index].value;

    if (val1 === val2) {
      score++;
      document.getElementById("score").innerText = score;

      //reset
      val1 = null;
      val2 = null;
      cardCount = 1;
    } else {
      alert("GAME OVER");
      location.reload();
    }
  }

  displayCards(cards);
}
