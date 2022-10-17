let inpt = document.querySelector("#inpt")
let btn = document.querySelector("#btn")
let res = document.querySelector("#res")
let base= document.querySelector("#base")
let base2= document.querySelector("#base2")

btn.addEventListener("click",function(){
 let sel = +base2.value
  // console.log(typeof(sel))// number
if(sel ===10){
  let num = +inpt.value
  let v = +base.value
  if (inpt.value===""){
      res.innerText="result: please enter value"  
  }
 else{
  res.innerText="result: "+(+num.toString(v)).toFixed(5)
 }
}
else{
  let bace = inpt.value;
  // type of bace is string
   let dec2 =   parseInt(bace,+base2.value)
  //  console.log(typeof(dec2))// number
  // console.log(typeof(base2.value))//string
   let num = dec2
  let v = +base.value//+operator for string to no.
  res.innerText="result: "+num.toString(v)
}
})