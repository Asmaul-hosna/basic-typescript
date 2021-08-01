let myName: any = "Asmaul Hosna ";
let age:number;
age = 12;
let isHungry: boolean = false;

type StringOrNumber = number | string;
type direction = 'left' | 'right' |'top' |'bottom';

let gameDirection: direction = 'right'

let studentId: StringOrNumber  = 344567;
studentId = 'web4-344304'
studentId = 1223445;

interface Person {
    name: string;
    age:number;
    hobby?:string;
}

type PersonType = { age: number,name:string, hobby:string};

let person: Person = {
    name:'Asmaul Hosna',
    age:12,
    hobby:'Sleeping'
}

let person2 : Person = { 
    name: 'someone',
    age:23
    

}

//Array

const numbers:(number | string) []= [33,67,45,78,'bitty'];

const persons: Person[] = [
{
    name: 'Asmaul Hosna',
    age:12,
    hobby: 'sleeping'
  

},
{
    name: 'Asmaul Hosna',
    age:12,
    hobby:'sleeping'
},
{
    name: 'Asmaul Hosna',
    age:12,
    hobby:'sleeping' 
}

];
//function 
const greeting = (name:string) : void => {
    console.log(`Hello ${name}`)
    
}

greeting('Hosna')

const add =(a: number,b: number):number => {
    return a + b

}
const introduce = ({name,age}:Person): void =>{
    console.log(`hello,my name is  ${name},and my age is ${age}`)
}
introduce({
    name: 'Asmaul Hosna',
    age:12,
    hobby:'sleeping' 
})
const getArray =<T> (arr:T[]):T[] => {
    return arr
}
getArray<string>(['Trudu'])
getArray<number>([1,2,3,4]);

//enum

enum week {
    Sat = 'SAT',
    Sun = 'SUN',
    Mon = 'MON',
    Tue = 'TUE',
    Wed = 'WED',
    Thr = 'THR',
    Fri = 'FRI'

}
console.log(week.Mon)