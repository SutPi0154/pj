const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const createLi = (text) => {
  const id = "flexCheck" + Math.random();
  const li = document.createElement("li");
  // li.addEventListener("dblclick", edit);

  li.innerHTML = `<div class="form-check">
  <input
        class="form-check-input"
        type="checkbox"
        value="" 
        id="${id}"
        onchange="done(event)"
    />
    <label class="form-check-label" for="${id}">
      ${text}
    </label>
    </div>
  <div class="btn-group">
    <button class="btn btn-sm btn-outline-dark edit-btn">
      <i class="bi bi-pencil-fill pe-none"></i>
  </button>
  <button class="btn btn-sm btn-outline-dark del-btn">
    <i class="bi bi-trash3 pe-none"></i> 
  </button>
  </div>
`;
  li.classList =
    "list-group-item d-flex justify-content-between align-items-center";

  return li;
};

const counter = () => {
  const totalCount = lists.children.length;
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
};

const addList = () => {
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
  } else {
    alert("Input Text is empty");
  }
  counter();
};

createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addList();
  }
});

const del = (event) => {
  if (confirm(`Are you sure to delete?`)) {
    event.target.closest("li").remove();
  }
  counter();
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

const edit = (event) => {
  const old = event.target.closest("li").querySelector(".form-check-label");
  const newText = prompt("Input new Text", old.innerText);
  if (newText && newText.trim()) {
    old.innerText = newText;
  }
};

const data = [`Apple`, `orange`, `banana`, `lime`];

data.forEach((d) => lists.append(createLi(d)));

// [...lists.children].forEach((li) => {
//   li.querySelector(".edit-btn").addEventListener("click", edit);
//   li.querySelector(".del-btn").addEventListener("click", del);
// });
lists.addEventListener("click", (event) => {
  if (event.target.classList.contains("del-btn")) {
    del(event);
  } else if (event.target.classList.contains("edit-btn")) {
    edit(event);
  }
});

window.addEventListener("load", counter());
