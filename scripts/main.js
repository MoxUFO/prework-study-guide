const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//welcome mi cas su casa

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Nelson Foster.");
    localStorage.setItem("Nelson Foster", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  if (!localStorage.getItem("Nelson Foster")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("Nelson Foster");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("Nelson Foster.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("Nelson Foster", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  } 