var userInput;

const peopleArray = [
  "Joe Biden",
  "Kamala Harris",
  "Lana Del Rey",
  "Grimes",
  "Joan Didion",
  "Helen Keller",
  "Ben Shapiro",
  "Joe Rogan",
  "Kim Kardashian",
  "Zendaya",
  "Donald Trump",
  "Hillary Clinton",
  "Jeffrey Epstein",
  "Elon Musk",
  "Azaelea Banks",
  "Timothee Chalamet",
  "Kurt Cobain",
  "Laura Dern",
  "Justin Trudeau",
  "Kanye West",
  "Justin Beiber",
  "Malala Yousafzai",
  "Ted Kaczynski",
  "Fiona Apple",
  "Paris Hilton",
  "Alex Jones",
  "Joe Rogan",
  "Mr. Beast",
  "Jeff Bezos",
  "Bill Gates",
  "Halsey",
  "FKA Twigs",
];

const termArray = [
  "IG infographic",
  "rehab clinic",
  "stimulus check",
  "mail-in ballot",
  "leaked e-mail",
  "New York Times Op-Ed article",
  "Buzzfeed listicle",
  "bad indie artist",
  "vague artist statement",
  "poorly-coded website",
  "Funko Pop",
  "Goverment Experiment",
  "dithered gradient",
  "Snapchat streak",
  "clarinet reed",
  "Bushwick rave",
  "podcast",
  "crisis actor",
  "oil rig",
  "vaccine",
  "chemtrail",
  "viking",
  "college transfer application",
  "adderal prescription",
  "coachella outfit",
  "Amazon gift card",
  "NFT collection",
];

function genColour() {
  const hue = Math.floor(Math.random() * (360 - 0) + 0);
  const saturation = Math.floor(Math.random() * (100 - 50) + 50);
  const lightness = Math.floor(Math.random() * (80 - 40) + 40);
  const colour = `hsl(${hue} , ${saturation}% , ${lightness}%)`;
  return colour;
}

function genFont() {
  const fonts = [
    "Font1",
    "Font2",
    "Font3",
    "Font4",
    "Font5",
    "Font6",
    "Font7",
    "Font8",
    "Font9",
    "Font10",
    "Font11",
    "Font12",
    "Font13",
    "Font14",
    "Font15",
    "Font16",
    "Font17",
    "Font18",
    "Font19",
    "Font20",
    "Font21",
    "Font22",
    "Font23",
    "Font24",
    "Font25",
    "Font26",
    "Font27",
    "Font28",
    "Font29",
  ];
  const fontSelect = fonts[Math.round(Math.random() * (fonts.length - 1))];
  console.log(fontSelect);
  return fontSelect;
}

// genFont();
function structure1() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is funded by <span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }</span>.</p>`;
}

function structure2() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is pregnant with <span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }'s</span> baby.</p>`;
}

function structure3() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is running alongside <span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }</span> for President.</p>`;
}

function structure4() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is using <span style="color:${genColour()}; font-family:${genFont()}">${
    termArray[Math.round(Math.random() * (termArray.length - 1))]
  }s</span> to perpetuate the culture war.</p>`;
}

function structure5() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> got away with stealing <span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }'s</span> <span style="color:${genColour()}; font-family:${genFont()}">${
    termArray[Math.round(Math.random() * (termArray.length - 1))]
  }</span>.</p>`;
}

function structure6() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }</span> was murdered by <span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> and replaced with a clone.</p>`;
}

function structure7() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is trying to turn <span style="color:${genColour()}; font-family:${genFont()}">${
    termArray[Math.round(Math.random() * (termArray.length - 1))]
  }s</span> into <span style="color:${genColour()}; font-family:${genFont()}">${
    termArray[Math.round(Math.random() * (termArray.length - 1))]
  }s</span>.</p>`;
}

function structure8() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is cheating on <span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }</span> with <span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }</span>.</p>`;
}

function structure9() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> thinks <span style="color:${genColour()}; font-family:${genFont()}">${
    termArray[Math.round(Math.random() * (termArray.length - 1))]
  }s</span> cause cancer.</p>`;
}

function structure10() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${
    peopleArray[Math.round(Math.random() * (peopleArray.length - 1))]
  }</span> is boycotting <span style="color:${genColour()}; font-family:${genFont()}">${
    termArray[Math.round(Math.random() * (termArray.length - 1))]
  }s</span> in protest of <span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span></p>`;
}

function structure11() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is secretly addicted to <span style="color:${genColour()}; font-family:${genFont()}">${
    termArray[Math.round(Math.random() * (termArray.length - 1))]
  }s</span>.</p>`;
}

function structure12() {
  return `<p class="structure"><span style="color:${genColour()}; font-family:${genFont()}">${userInput}</span> is a CIA psy-op.</p>`;
}

var conspiracy = document.querySelector(".conspiracy");
var refreshButton = document.querySelector(".refresh");
var shareButton = document.querySelector(".share");
var input = document.querySelector(".inputHide");

document.querySelector("#textinput").addEventListener("keypress", () => {
  if (event.keyCode === 13) {
    userInput = event.target.value;
    var randStructure = Math.round(Math.random() * (12 - 1)); //update as u go
    switchCase(randStructure);
    refreshButton.removeAttribute("disabled");
    shareButton.removeAttribute("disabled");
  }
});

refreshButton.addEventListener("click", () => {
  var randStructure = Math.round(Math.random() * (12 - 1)); //update as u go
  switchCase(randStructure);
});

// document.querySelector("#textinput").addEventListener("keypress", () => {
//   if (event.keyCode === 13) {
//     document.getElementById()
//   }
// });

function switchCase(randStructure) {
  switch (randStructure) {
    case 0:
      var response = structure1();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 1:
      var response = structure2();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 2:
      var response = structure3();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 3:
      var response = structure4();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 4:
      var response = structure5();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 5:
      var response = structure6();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 6:
      var response = structure7();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 7:
      var response = structure8();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 8:
      var response = structure9();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 9:
      var response = structure10();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 11:
      var response = structure11();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 12:
      var response = structure12();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    case 13:
      var response = structure13();
      console.log(response);
      conspiracy.innerHTML = response;
      break;

    default:
      console.error("uncaught switch");
      break;
  }
}
