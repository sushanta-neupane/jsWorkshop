const operation = document.querySelector(".operation");
const results = document.querySelector(".result");

const action = (e) => {
  if (e === "del") {
    operation.innerHTML = back(operation.innerHTML);
  } else if (e === "ac") {
    results.innerHTML = "";
    operation.innerHTML = "";
  } else if (e === "equal") {
    let result = compute(operation.innerHTML);
    results.innerHTML = result;
    
  } else {
    operation.innerHTML += e;
  }
};

const compute = (expre) => {
  try {
    if (!expre) expre=0
      value = eval(expre);
    return value;
  } catch {
    console.error("Syntax Error")
    return "Syntax Error";
  }
};

const back =(v) =>v.slice(0,-1)
