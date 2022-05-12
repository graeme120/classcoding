let filterValue = "all";

var yourName = prompt("Enter Your Name: ");
var occupation = prompt("Enter an Occupation: ");
var salary = prompt("Enter a number between 2 and 100: ");
var yourEXP = prompt("Enter a saying or expression: ");
var verb = prompt("Enter an action verb not ending in ING: ");
var adjective = prompt("Enter an adjective: ");
var pluralNoun = prompt("Enter a plural noun: ");

const peopleArray = [
  "Joe Biden",
  "KamalaHarris",
  "Lana Del Rey",
  "Grimes",
  "Joan Didion",
  "Helen Keller",
  "Ben Shapiro",
  "Joe Rogan",
  ElonMusk,
  HillaryClinton,
  FrankOcean,
  JeffreyEpstein,
  OliviaRodrigo,
  CharliDamelio,
  Zendaya,
  MrBeast,
  DonaldTrump,
  JeffBezos,
  MarkZuckerberg,
  KanyeWest,
  KimKardashian,
  AzaeleaBanks,
  Beyoncé,
  MeganTheeStallion,
  Lizzo,
  Drake,
];

const peopleCnt = peopleArray.length;
const peopleRand = math.floor(math.random() * peopleCnt);

document.write(
  yourName +
    " just got offered a new job as a " +
    occupation +
    " making " +
    salary +
    " dollars per hour. '" +
    yourEXP +
    "' you say! Your job requires you to " +
    verb +
    " and make " +
    adjective +
    "" +
    pluralNoun +
    "."
);

// fetch("https://api.airtable.com/v0/appFOm7DDpMYM90u9/albums", {
//   headers: {
//     Authorization: "Bearer keyxq87yw8w7CglcJ",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     function handleDropdown() {
//       console.log(event.target.value);
//     }

//     const content = document.querySelector(".content");

//     function generateContent() {
//       data.filter((item) => {
//         return item.type === "brass";
//       });

//       data.forEach((item) => {
//         console.log(item);
//         content.innerHTML += `
//     <div class ="card">
//         <p>trending number: ${item.popularity}</p>
//         <h3>${item.name}</h3>
//         <p>${item.type}</p>
//         <p class="price">$${item.price}</p>
//         <p class="${item.isInStock === true ? "in-stock" : "out of stock"}">
//         In Stock: ${item.isInStock ? "yes in stock" : "no out of stock"}
//         </p>
//     </div>
//     `;
//       });
//     }
//   });

generateContent();
