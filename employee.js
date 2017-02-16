function employee(name,age,salary,dob){
  this.name=name;
  this.age=age;
  this.salary=salary;
  this.dob=dob;
};

var akash=new employee("Akash",24,28900,new Date(1993,02,24));
parul=new employee("Parul",22,24590,new Date(1995,06,18));
avnish=new employee("Avnish",23,34000,new Date(1994,08,12));
nadim=new employee("Nadim Khan",22,27900,new Date(1995,10,23));
yatindra=new employee("Yatindra",24,15000,new Date(1993,11,26));
preksha=new employee("Preksha",24,18000,new Date(1993,0,23));

var employees=[akash,parul,avnish,nadim,yatindra,preksha];
for(var i=0;i<employees.length;i++){
  console.log(employees[i].name+" "+employees[i].age+" "+employees[i].salary+" "+employees[i].dob+"\n");
}

//Filter all employees>20000
console.log("\n\nEmployees with salary greater than 20000 \n");
for(var i=0;i<employees.length;i++){
  if(employees[i].salary>20000){
    console.log(employees[i].name+" "+employees[i].age+" "+employees[i].salary+" "+employees[i].dob+"\n");
  }
}

//group employee on the basis of their age.
console.log("\n\nGroup employee on the basis of their age \n");
employees.sort(function(x,y){
  return x.age-y.age;
});
for(var i=0;i<employees.length;i++){
    console.log(employees[i].name+" "+employees[i].age+" "+employees[i].salary+" "+employees[i].dob+"\n");
  }



//fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
console.log("\n\nEmployee with salary < 20000 and age >23");
for(var i=0;i<employees.length;i++){
  if(employees[i].salary<20000 && employees[i].age>23){
    console.log(employees[i].name+" "+employees[i].age+" "+employees[i].salary+" "+employees[i].dob+"\n");
  }
}
