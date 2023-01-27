//variable

const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web Design Service",
    price: 150,
  },
  {
    id: 4,
    title: "Maintenance  Service",
    price: 100,
  },
  //   {
  //     id: 5,
  //     title: "Domain Service",
  //     price: 100,
  //   },
  //   {
  //     id: 6 ,
  //     title: "Domain Service",
  //     price: 15,
  //   },
];

// Selector

const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const tax = document.querySelector("#tax");
const subTotal = document.querySelector("#subTotal");
const listTotal = document.querySelector("#listTotal");
const listTable = document.querySelector("#listTable");

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.classList.add("list");
  tr.setAttribute("serviceId", service.id);
  const total = service.price * quantity;
  tr.innerHTML = `
  <td class="d-flex justify-content-between">${service.title}
  <i class="bi bi-trash3 del-btn text-danger"></i> 
  </td>
  <td class="text-end list-quantity">${quantity}</td>
  <td class="text-end">${service.price}</td>
  <td class="text-end list-total">${total}</td>
`;
  return tr;
};

// processes ( tasks )
//service option loop
services.forEach(({ title, id }) =>
  selectService.append(new Option(title, id))
);
const findTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  let subTotalCalculated = [...listTotal].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  subTotal.innerText = subTotalCalculated;
  tax.innerText = findTax(subTotalCalculated);
  total.innerText = subTotalCalculated + findTax(subTotalCalculated);
};

const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.add("d-none");
  }
};

invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedService = services.find(
    ({id}) =>  id == selectService.value
  );

  const isExistedService = [...lists.children].find(
    (el) => el.getAttribute("serviceId") == selectedService.id
  );
  if (isExistedService) {
    const existedQuantity = isExistedService.querySelector(".list-quantity");
    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;
    isExistedService.querySelector(".list-total").innerText =
      existedQuantity.innerText * selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity.valueAsNumber));
  }

  invoiceForm.reset();
  findTotal();
  showTable();
});

app.addEventListener("click", (event) => {
  const currentElement = event.target;
  if (currentElement.classList.contains("del-btn")) {
    currentElement.closest("tr").remove();
    findTotal();
    showTable( );
  }
});
