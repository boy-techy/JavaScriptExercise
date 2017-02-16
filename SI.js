var x=prompt("Enter amount, interest rate and no. of years: ");
var amount= parseInt(x.slice(0,x.indexOf(",")));
x= x.slice(x.indexOf(",")+1);
var interest_rate= parseInt(x.slice(0,x.indexOf(",")));
var no_of_years= parseInt(x.slice(x.indexOf(",")+1));
var si=(amount*interest_rate*no_of_years)/100;
alert("Simple Interest is:"+si);
