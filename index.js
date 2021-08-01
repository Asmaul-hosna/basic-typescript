"use strict";
var myName = "Asmaul Hosna ";
var age;
age = 12;
var isHungry = false;
var gameDirection = 'right';
var studentId = 344567;
studentId = 'web4-344304';
studentId = 1223445;
var person = {
    name: 'Asmaul Hosna',
    age: 12,
    hobby: 'Sleeping'
};
var person2 = {
    name: 'someone',
    age: 23
};
//Array
var numbers = [33, 67, 45, 78, 'bitty'];
var persons = [
    {
        name: 'Asmaul Hosna',
        age: 12,
        hobby: 'sleeping'
    },
    {
        name: 'Asmaul Hosna',
        age: 12,
        hobby: 'sleeping'
    },
    {
        name: 'Asmaul Hosna',
        age: 12,
        hobby: 'sleeping'
    }
];
//function 
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting('Hosna');
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("hello,my name is  " + name + ",and my age is " + age);
};
introduce({
    name: 'Asmaul Hosna',
    age: 12,
    hobby: 'sleeping'
});
var getArray = function (arr) {
    return arr;
};
getArray(['Trudu']);
getArray([1, 2, 3, 4]);
//enum
var week;
(function (week) {
    week["Sat"] = "SAT";
    week["Sun"] = "SUN";
    week["Mon"] = "MON";
    week["Tue"] = "TUE";
    week["Wed"] = "WED";
    week["Thr"] = "THR";
    week["Fri"] = "FRI";
})(week || (week = {}));
console.log(week.Mon);
