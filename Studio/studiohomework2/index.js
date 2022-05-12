const block = document.querySelector(".block");
const poor = document.querySelector(".poor");
let value;

function changeFont() {
  console.log(event.target.value, "fontValue");
  value = event.target.value;
  const fontName = `Helvetica${value}`;
  console.log(fontName);
  block.style.fontFamily = fontName;
  poor.style.fontFamily = fontName;
}

const shareButton = document.getElementById("button");

console.log(shareButton);
shareButton.addEventListener("click", async () => {
  const response = await fetch(`Helvetica-Series/H${value}.png`);
  console.log(response);
  const blob = await response.blob();
  const filesArray = [
    new File([blob], "The_Poor_Image.png", {
      type: "image/png",
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
});
