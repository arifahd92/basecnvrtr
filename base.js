let inpt = document.querySelector("#inpt")
let btn = document.querySelector("#btn")
let res = document.querySelector("#res")
let tobase= document.querySelector("#tobase")
let frmbase= document.querySelector("#frmbase")

btn.addEventListener("click",function(){
  let frmbase= document.querySelector("#frmbase")
 let sel = +frmbase.value
  // console.log(typeof(sel))// number
if(sel ===10){
  let num = +inpt.value
  console.log(num)
  let v = +tobase.value
  console.log(v)
  if (inpt.value===""){
      res.innerText="result: please enter value"  
  }
 else{
  let actres=num.toString(v)
  if(v==16){
    res.innerText="result: " + (actres)
  }
  else{

    res.innerText="result: " + (+actres).toFixed(4)
  }
 }
}
else{
  let inputvalue= inpt.value;
  // type of inputvalue is string
   let dec2 =   parseInt(inputvalue,+frmbase.value)
     //decimal equivalent of input at from base
   let num = dec2
  let v = +tobase.value//+operator for string to no.
  console.log(isNaN(parseFloat(num)))
  if(isNaN(parseFloat(num))){
    res.innerText="result: "+"Enter valid no. and make sure the no. exist at selected base"
  }
  else
  res.innerText="result: "+num.toString(v)
}
})