const BASE_URL = "https://api.frankfurter.dev/v2/rates?base=";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtval = amount.value.trim();

  if (
    amtval === "" ||
    !Number.isFinite(Number(amtval)) ||
    Number(amtval) <= 0
  ) {
    msg.innerText = "Please enter a valid amount";
    return;
  }

  const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}&quotes=${toCurr.value.toLowerCase()}`;

  try {
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    let data = await response.json();

    if (data.length > 0) {
      let rate = data[0]["rate"];
      let finalAmount = amtval * rate;

      msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } else {
      msg.innerText = "Conversion unavailable";
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    msg.innerText = "Unable to fetch exchange rate. Try again.";
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
