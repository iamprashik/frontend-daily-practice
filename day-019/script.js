const age = 17;
const hasId = true;

if(age >= 18) {
    console.log("You are atleast 18.")
    if(hasId) {
        console.log("And you have a valid Id.")
        console.log("You may enter.")
    }else {
      console.log("But You need a valid Id to enter.")  
    }
}else {
    console.log("You must be 18 or older.")
}