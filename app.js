const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);  //this number to get a number color
    const randomCode = "#" + randomNumber.toString(16); //16 write for Hexa Code
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
  //Copy RandomColor
    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// init call to refresh page
getColor();