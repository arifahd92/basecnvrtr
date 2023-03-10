let inpt = document.querySelector("#inpt")
let btn = document.querySelector("#btn")
let res = document.querySelector("#res")
let tobase= document.querySelector("#tobase")
let frmbase= document.querySelector("#frmbase")

btn.addEventListener("click",function(){
  let frmbase= document.querySelector("#frmbase")
 let sel = +frmbase.value
 var error=false
  // console.log(typeof(sel))// number
if(sel ===10){
  let inptarr=[...inpt.value]//array will contain value in string form like["1","4",'h']
  inptarr.forEach((e)=>{
    console.log(e)
    if(typeof(e) === "string" && isNaN(e) && e!="."){
      error=true
      console.log("error detected")
    
    }
  })
  let num = +inpt.value
  
  let v = +tobase.value
  // console.log(v)
   if (inpt.value===""){
       res.innerText="result: please enter value"  
   }
  else if(error){
    res.innerText="result: please enter valid number"  
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
  let inptarr=[...inpt.value]
  if(+frmbase.value<16){
      inptarr.forEach((e)=>{
        if(e>=+frmbase.value){
          error=true
          console.log("error found in input")
        }
        else if(typeof(e) === "string" && isNaN(e)&& e!="."){
          error=true
        }
      })
  }
  else if(+frmbase.value==16){
    const hexRegex = /^[0-9A-Fa-f]+$/g;
    if (!hexRegex.test(inpt.value)) {
      console.log('Invalid hexadecimal number');
      error=true
    }
  }
   let dec2 =   parseInt(inputvalue,+frmbase.value)
     // dec2 is decimal equivalent of input at from base
   let num = dec2
  let v = +tobase.value//+operator for string to no.
 console.log(isNaN(parseFloat(num)))
  if(isNaN(parseFloat(num))){
    res.innerText="result: "+"Enter valid no. and make sure the no. exist at selected base"
  }
  else if(error){
    res.innerText="result: "+"please enter valid number"
  }
  else
  res.innerText="result: "+num.toString(v)
}
})