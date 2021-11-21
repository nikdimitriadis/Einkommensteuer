// Global var
const form = document.querySelector("form");
const year = document.getElementById("year");
const eins = document.getElementById("eins");
const textSteuer = document.getElementById("steuer");
const tenK = 10000;
const oneFour = 1400;
const twoThree = 2397;
const fall4coef = 0.42;
const fall5coef = 0.45;
const years = [2019, 2020, 2021];
const cases2019 = [9168, 14254, 55960, 265326];
const cases2020 = [9408, 14532, 57051, 270500];
const cases2021 = [9744, 14753, 57918, 274612];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let zvE = Number(document.getElementById("income").value);
  zvE = eins.checked ? zvE : zvE / 2;
  start(zvE);
});

function start(zvE) {
  const firstYear = year.value == years[0] ? true : false;
  const secondYear = year.value == years[1] ? true : false;
  const thirdYear = year.value == years[2] ? true : false;

  //   first year
  if (firstYear && zvE < cases2019[0]) {
    fallEins(zvE);
  } else if (firstYear && zvE < cases2019[1]) {
    let fall2A = cases2019[0];
    let fall2B = 980.14;
    fallZwei(zvE, fall2A, fall2B);
  } else if (firstYear && zvE < cases2019[2]) {
    let fall2A = cases2019[1];
    let fall2B = 216.16;
    let fall2C = 965.58;
    fallDrei(zvE, fall2A, fall2B, fall2C);
  } else if (firstYear && zvE < cases2019[3]) {
    let fall4A = 8780.9;
    fallVier(zvE, fall4A);
  } else if (firstYear && zvE > cases2019[3]) {
    let fall5A = 16740.68;
    fallFunf(zvE, fall5A);
  }

  //   second year
  if (secondYear && zvE < cases2020[0]) {
    fallEins(zvE);
  } else if (secondYear && zvE < cases2020[1]) {
    let fall2A = cases2020[0];
    let fall2B = 972.87;
    fallZwei(zvE, fall2A, fall2B);
  } else if (secondYear && zvE < cases2020[2]) {
    let fall2A = cases2020[1];
    let fall2B = 212.02;
    let fall2C = 972.79;
    fallDrei(zvE, fall2A, fall2B, fall2C);
  } else if (secondYear && zvE < cases2020[3]) {
    let fall4A = 8963.74;
    fallVier(zvE, fall4A);
  } else if (secondYear && zvE > cases2020[3]) {
    let fall5A = 17078.74;
    fallFunf(zvE, fall5A);
  }

  //   third year
  if (thirdYear && zvE < cases2021[0]) {
    fallEins(zvE);
  } else if (thirdYear && zvE < cases2021[1]) {
    let fall2A = cases2021[0];
    let fall2B = 995.21;
    fallZwei(zvE, fall2A, fall2B);
  } else if (thirdYear && zvE < cases2021[2]) {
    let fall2A = cases2021[1];
    let fall2B = 208.85;
    let fall2C = 950.96;
    fallDrei(zvE, fall2A, fall2B, fall2C);
  } else if (thirdYear && zvE < cases2021[3]) {
    let fall4A = 9136.63;
    fallVier(zvE, fall4A);
  } else if (thirdYear && zvE > cases2021[3]) {
    let fall5A = 17374.99;
    fallFunf(zvE, fall5A);
  }
}

// FALL 1
function fallEins(zvE) {
  textSteuer.innerText = 0;
}
// FALL 2
function fallZwei(zvE, fall2A, fall2B) {
  let y = (zvE - fall2A) / tenK;
  let ESt = (fall2B * y + oneFour) * y;
  ESt = eins.checked ? ESt : ESt * 2;
  textSteuer.innerText = ESt.toFixed(2);
}
// FALL 3
function fallDrei(zvE, fall2A, fall2B, fall2C) {
  let y = (zvE - fall2A) / tenK;
  let ESt = (fall2B * y + twoThree) * y + fall2C;
  ESt = eins.checked ? ESt : ESt * 2;
  textSteuer.innerText = ESt.toFixed(2);
}
// FALL4
function fallVier(zvE, fall4A) {
  let ESt = fall4coef * zvE - fall4A;
  ESt = eins.checked ? ESt : ESt * 2;
  textSteuer.innerText = ESt.toFixed(2);
}
// FALL 5
function fallFunf(zvE, fall5A) {
  let ESt = fall5coef * zvE - fall5A;
  ESt = eins.checked ? ESt : ESt * 2;
  textSteuer.innerText = ESt.toFixed(2);
}
