
const whole_income = document.getElementById("whole_income")
const amount_output = document.getElementById("amount_output")
let amount_paid = document.getElementById("amount_paid")
const expenses = document.getElementById("expenses")
const income_li = document.getElementById("income_li")
const exp_li = document.getElementById("exp_li")
const exp_text = document.getElementById("exp_text")
const source_el = document.getElementById("source_el")
const btn_addAmount = document.getElementById("btn_addAmount")
const btn_addExpenses = document.getElementById("btn_addExpenses")
const source_li_come = document.getElementById("source_li_come")
const expen_name_li = document.getElementById("expen_name_li")
const expenses_items_names = document.getElementById("expenses_items_names")
const expenses_figure = document.querySelector("#expenses_figure")
const clear_btn = document.querySelector("#clear_btn")

let amount_el= 0;
 


let income_li_store =[]
let whole_income_store =[]
let exp_li_store =[]
let amount_paid_store =[]
let expenses_name_store=[]

const localStorageIncomeLi =JSON.parse(localStorage.getItem("income_li_store"))
if(localStorageIncomeLi){
income_li_store= localStorageIncomeLi
renderAmount()
}
const localStorageAmountLi =JSON.parse(localStorage.getItem("amount_paid_store"))
if(localStorageAmountLi){
    amount_paid_store= localStorageAmountLi
    renderAmount()
}
const localStorageExpLi = JSON.parse(localStorage.getItem("exp_li_store"))
if(localStorageExpLi){
    exp_li_store = localStorageExpLi
    expen_removal_content()
}
const localStorageExpenses = JSON.parse(localStorage.getItem("expenses_name_store"))
if(localStorageExpenses){
    expenses_name_store=localStorageExpenses
    expen_removal_content()
}

btn_addAmount.addEventListener("click",function () {
    income_li_store.push(source_el.value)
    amount_paid_store.push(amount_paid.value)
    renderAmount()
    amountCalc()
    localStorage.setItem("income_li_store",JSON.stringify(income_li_store))
    localStorage.setItem("amount_paid_store",JSON.stringify( amount_paid_store))
})

function renderAmount() {
    let incomeList=""
    let amount_store_el= ""
    for(let i =0; i<income_li_store.length; i++){
        incomeList+="<li> "+income_li_store[i]+"</li>"
        // incomeList=income_li_store[i]
    }
   
    for (let p = 0; p< amount_paid_store.length; p++ ) {
        amount_store_el +="<li>"+'#'+amount_paid_store[p]+"</li>"
        
    }
    income_li.innerHTML = incomeList
    // income_li.innerHTML += "<li>"+incomeList+"</li>"
    exp_li.innerHTML= amount_store_el
 
}
function amountCalc() {
//   total_el = parseInt(whole_income.value)
   total_amount = (+amount_paid.value)+amount_el
   amount_output.textContent="#"+amount_paid.value ;
   amount_el = amount_el + parseInt(amount_paid.value)
    whole_income.innerHTML ="#"+ amount_el
 
}

function subExpenses() {
    amount_el = amount_el - parseInt(expenses.value)
    whole_income.innerHTML = "#"+ amount_el
}
clear_btn.addEventListener("dblclick", function () {
     income_li_store =[]
     whole_income_store =[]
     exp_li_store =[]
     amount_paid_store =[]
     expenses_name_store=[]
     localStorage.clear()
 })

btn_addExpenses.addEventListener("click",function () {
    exp_li_store.push(exp_text.value)
    expenses_name_store.push(expenses.value)
    expen_removal_content()
    subExpenses()
    localStorage.setItem("exp_li_store", JSON.stringify(exp_li_store))
    localStorage.setItem("expenses_name_store", JSON.stringify(expenses_name_store))
})
function expen_removal_content() {
    total_expenses = amount_el + parseInt(expenses.value)
    let expen_name_li_item="";
    let letNameOfExpenses = ""
    for(let k=0; k< exp_li_store.length; k++){
       expen_name_li_item += "<li>"+exp_li_store[k]+"</li>"
    }
    for(let c=0; c< expenses_name_store.length; c++){
        letNameOfExpenses += "<li>"+'#'+expenses_name_store[c]+"</li>"
     }
    
    expen_name_li.innerHTML=expen_name_li_item
    expenses_figure.textContent ="-#"+ expenses.value
    expenses_items_names.innerHTML =letNameOfExpenses
    
}