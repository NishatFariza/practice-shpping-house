function productUpdateNumber( product, price, isIncrease){
    const productInput =document.getElementById(product + '-input');
    let productInputNumber =productInput.value;
    
    console.log(productUpdateNumber);
    // console.log(productInputNumber);  

    if(isIncrease == true){
        productInputNumber = parseInt(productInputNumber) +1;
        console.log(productInputNumber);
    }
    else if(productInputNumber > 0){
        productInputNumber = parseInt(productInputNumber) -1;
    }
     productInputNumber.value = productInputNumber;


    // update total 
    const productTotal = document.getElementById(product + '-total');
     productTotal.innerText = productInputNumber * price;
     console.log(productTotal.innerText);

     productCalculateTotal();

}





//calculate total
function getInputValue(product){
  const productInput =document.getElementById(product +'-input');
  const productInputNumber =parseInt(productInput.value);
  return productInputNumber;
}
function productCalculateTotal(){
    const chairTotal = getInputValue('chair') * 25;
    const sofaTotal =getInputValue('sofa') * 68;
    const tableTotal =getInputValue('table') * 90;
    const subTotal = chairTotal + sofaTotal + tableTotal;
    const tax  =subTotal(9.15/100);
    const totalAmount =subTotal +tax;

    //update on the html
    document.getElementById('sub-total-amount').innerText= subTotal;
    document.getElementById('tax-amount').innerText =tax;
    document.getElementById('total-amount').innerText =totalAmount;
    
}


//chair increase and decrease event 
document.getElementById('chair-plus').addEventListener('click', function(){
    productUpdateNumber('chair', 25, true);
    // console.log('gggggggggggg')
});
document.getElementById('chair-minus').addEventListener('click', function(){
    productUpdateNumber('chair', 25, false);
});

//sofa increase and decrease event 
document.getElementById('sofa-plus').addEventListener('click', function(){
    productUpdateNumber('sofa', 68, true);
});
document.getElementById('sofa-minus').addEventListener('click', function(){
    productUpdateNumber('sofa', 68, false);
});

//table increase and decrease event 
document.getElementById('table-plus').addEventListener('click', function(){
    productUpdateNumber('table', 90, true);
});
document.getElementById('table-minus').addEventListener('click', function(){
    productUpdateNumber('table', 90, false);
});
