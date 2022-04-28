console.log(data);

function handleDropdown() {
  console.log(event.target.value);
}

const content = document.querySelector(".content");

function generateContent() {
  data.filter((item) => {
    return item.type === "brass";
  });

  data.forEach((item) => {
    console.log(item);
    content.innerHTML += `
    <div class ="card">
        <p>trending number: ${item.popularity}</p>
        <h3>${item.name}</h3>
        <p>${item.type}</p>
        <p class="price">$${item.price}</p>
        <p class="${item.isInStock === true ? "in-stock" : "out of stock"}">
        In Stock: ${item.isInStock ? "yes in stock" : "no out of stock"}
        </p>
    </div>
    `;
  });
}

generateContent();
