let familyMembers = [];

function addFamilyMember() {
  const memberName = document.getElementById('member').value;
  const budget = parseInt(document.getElementById('budget').value);
  const spending = parseInt(document.getElementById('spending').value);

  const member = {
    name: memberName,
    budget: budget,
    spending: spending,
    rembudget: budget - spending
  };
  
  

  if(isNaN(budget) || isNaN(spending)){
    alert("Enter Inputs!!!")
    return 0;
  }




  familyMembers.push(member);

  const familyTableBody = document.getElementById('familyTableBody');
  const row = familyTableBody.insertRow(-1);
  const nameCell = row.insertCell(0);
  const budgetCell = row.insertCell(1);
  const spendingCell = row.insertCell(2);
  const remainingBudgetCell = row.insertCell(3);

  nameCell.innerHTML = memberName;
  budgetCell.innerHTML = budget;
  spendingCell.innerHTML = spending;
  remainingBudgetCell.innerHTML = budget - spending;

  document.getElementById('member').value = '';
  document.getElementById('budget').value = '';
  document.getElementById('spending').value = '';
}



function calculateTotal() {
  const utilityBills = parseInt(document.getElementById("utility-bills").value) || 0;
  const educationPayment = parseInt(document.getElementById("education-payment").value) || 0;
  const otherPayment = parseInt(document.getElementById("other-payment").value) || 0;
  

  let eduPayment = educationPayment / 12;
  const total = utilityBills + eduPayment + otherPayment;

  
  if(total == 0){
    alert("Enter the spends!");
    return 0;
  }

  let budgetSum = 0;
  for (let i = 0; i < familyMembers.length; i++) {
    budgetSum += familyMembers[i].budget;
  }

  let spendsSum = 0;
  for (let j = 0; j < familyMembers.length; j++) {
    spendsSum += familyMembers[j].spending;
  }

  let lastSum = 0;
  for (let k = 0; k < familyMembers.length; k++) {
    lastSum = familyMembers[k].budget - familyMembers[k].spending
  }

  let remSum = 0;
  for (let m = 0; m < familyMembers.length; m++) {
    remSum += familyMembers[m].rembudget
  }
  
    document.getElementById("budgetlast").innerHTML = `Members Budget: $${budgetSum}`;
    document.getElementById("total").innerHTML = `Total Family Spends: $${Math.floor(total)}`;
    document.getElementById("members-spends").innerHTML = `Members' spends: $${spendsSum}`;
    document.getElementById("mem-remain").innerHTML = `Budget: $${remSum}`
    addNewDisplay();
}

function addNewDisplay(){
  const smDiv = document.getElementById("sm-div");
  smDiv.style.marginLeft = "100px";
  const newDisplayDiv = document.createElement("div");
  newDisplayDiv.classList.add("newDisplay");

  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  const form = document.createElement("form");

  const label = document.createElement("label");
  label.setAttribute("for", "dream");
  label.textContent = "How much money do you need?:";

  const input = document.createElement("input");
  input.classList.add("inchqan")
  input.setAttribute("type", "number");
  input.setAttribute("id", "dre");
  input.setAttribute("name", "dre");

  const xLabel = document.createElement("label");
  xLabel.setAttribute("for", "x");
  xLabel.textContent = "how much money can you save?";

  const xInput = document.createElement("input");
  xInput.classList.add("xnayel")
  xInput.setAttribute("type", "number");
  xInput.setAttribute("id", "x");
  xInput.setAttribute("name", "x");


  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Calculate";
  button.addEventListener("click", xn);

  const divm = document.createElement("div")
  divm.classList.add("sm-dream")

  const outpuT = document.createElement("span")
  outpuT.classList.add("outpuT")
  outpuT.setAttribute("id", "outpuT")
  outpuT.setAttribute("name", "outpuT")


  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement("br"));
  form.appendChild(xLabel);
  form.appendChild(xInput);
  form.appendChild(button);

  rowDiv.appendChild(form);
  newDisplayDiv.appendChild(rowDiv);

  smDiv.appendChild(newDisplayDiv);
}

function xn(){
  const dream = parseInt(document.getElementById("dre").value);
  const xnay = parseInt(document.getElementById("x").value);

  const result = dream / xnay;

  alert(`Xnayelov ${xnay}$ duq karox eq havaqel ${dream}$ - ${result} amsum`)

  const newDisplayDiv = document.querySelector(".newDisplay");
  newDisplayDiv.appendChild(outputSpan);
}

function refresh(){
  window.location.reload();
}