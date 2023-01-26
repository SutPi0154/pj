//variable

fonts = ["Roboto Mono", `Ma Shan Zheng`, `Dancing Script`, `Alfa Slab One`];

//Selectors

const text = document.querySelector("#text");
const output = document.querySelector("#output");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

fonts.forEach((font) => {
  fontFamily.append(new Option(font, font));
});

//process
text.addEventListener("keyup", (event) => {
  //   console.log(event.target.value);
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  //   console.log(event.target.value);
  output.style.color = event.target.value;
});

fontSize.addEventListener("change", (event) => {
  output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change", (event) => {
//   console.log(event.target.value);   
  output.style.fontFamily = event.target.value;
});
