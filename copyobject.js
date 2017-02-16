var employee=new Object();
employee.name="Yatindra Khandal";
employee.age= 23;
employee.salary= 15000;

employee1=new Object();
for(var prop in employee){
  employee1[prop]=employee[prop];
}
console.log(employee1.name+" "+employee1.age+" "+employee1.salary);

//Multiple Objects
var e1={name:"Yatindra",age:24};
var e2={salary:12000,dob:"26/11/1993"};
var detail=new Object();

var arr=[e1,e2];
for(var i=0;i<arr.length;i++){
  for(var prop in arr[i]){
    detail[prop]=arr[i][prop];
  }
}

for(var prop in detail){
  console.log(detail[prop]);
}

/*function employee(name,age,salary){
  this.name=name;
  this.age=age;
  this.salary=salary;
}
e1=new employee("Yatindra Khandal",23,15000);
e2=new employee();
for(var prop in e1){
  e2[prop]=e1[prop];
}
console.log(e2.name+" "+e2.age+" "+e2.salary);
*/
