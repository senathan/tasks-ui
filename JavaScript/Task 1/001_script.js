// Task1

bs = 10000;
da = bs * 0.4;
hra = bs * 0.2;

gs = bs + da + hra;


// Get the value entered by the user
const basicSalary = document.getElementById('salaryInput').value;

console.log('Basic Salary                       :',bs);
console.log('dearness allowance is 40%          :',da);
console.log('house rent allowance is 20%        :',hra);
console.log('Gross Salary                       :',gs);


// Task2
city1=250
city2=350 

k=city2-city1

m=k*1000
feet=k*3280.84
inches=k*39370
cm=k*100000
console.log('City1 distance                     :',city1);
console.log('City2 distance                     :',city2);
console.log('Diffrence  between two cities      :',k);
console.log('Distance in meters                 :',m);
console.log('Distance in feet                   :',feet);
console.log('Distance in inches                 :',inches);
console.log('Distance in cm                     :',cm);

// Task3
english=45
tamil=66
social=77
maths=89
science=39

totalScored = english+tamil+social+maths+science
aggregate = totalScored/5
percentage = totalScored/5
console.log('Engish               :',english);
console.log('Tamil                :',tamil);
console.log('History              :',social);
console.log('Maths                :',maths);
console.log('Science              :',science);
console.log('Aggregate            :',aggregate);
console.log('Percentage  scored   :',percentage);

//Task 4
f=100
temperature=((f-32) * 5/9)

console.log('Fahrenheit                 :',f);
console.log('Temperature                :',Math.floor(temperature),'deg C');

