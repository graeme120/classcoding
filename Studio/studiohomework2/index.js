
const block = document.querySelector(".block")


function changeFont(){

    console.log(event.target.value)
    const value= event.target.value 
    const fontName = `Helvetica${value}`
    console.log(fontName)
    block.style.fontFamily= fontName
}
textFit(document.querySelector(".block"));

const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', async () => {
  const response = await fetch(`H${value}.png`);
  const blob = await response.blob();
  const filesArray = [
    new File([blob], 'The_Poor_Image.png', {
      type: 'image/png',
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
});



