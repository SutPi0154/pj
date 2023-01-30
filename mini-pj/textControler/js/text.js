//variable

fonts = ["Roboto Mono", `Ma Shan Zheng`, `Dancing Script`, `Alfa Slab One`];

//Selectors

const text = document.querySelector("#text");
const output = document.querySelector("#output");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const speech = document.querySelector("#speech");

const synth = window.speechSynthesis;

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
  utterance.text = text;

  utterance.addEventListener("start", () => {
    speech.classList.add("active");
  });
  utterance.addEventListener("end", () => {
    speech.classList.remove("active");
  });
};
const listen = () => {
  const recognition = new webkitSpeechRecognition();

  recognition.lang = "en-US";
  // recognition.interimResults = false;
  // recognition.maxAlternatives = 1;

  recognition.start();
  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    console.log(text);
  };

  // const listen = () => {};

  // listen();
};

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

speech.addEventListener("click", () => {
  speak(text.value);
});
