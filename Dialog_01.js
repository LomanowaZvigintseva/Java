let infoPazient=["Иванов","Иван","Иваныч", 15, "мая", 1974, "м"];
console.log(infoPazient);
console.log(infoPazient[1]);
console.log(infoPazient[2]);
console.log(infoPazient[3]);
console.log(infoPazient[4]);
console.log(infoPazient[6]);
/*
let lastname;
lastname=prompt("Введите фамилию пациента", lastname);
console.log(lastname);
infoPazient[0]=lastname;
console.log(infoPazient);
let firstname;
firstname=prompt("Введите имя пациента", firstname);
console.log(firstname);
infoPazient[1]=firstname;
console.log(infoPazient);
let middlename;
middlename=prompt("Введите отчество пациента", middlename);
console.log(middlename);
infoPazient[2]=middlename;
console.log(infoPazient);
let date;
date=prompt("Введите дату рождения пациента", date);
console.log(date);
infoPazient[3]=date;
console.log(infoPazient);
let month;
month=prompt("Введите месяц рождения пациента", month);
console.log(month);
infoPazient[4]=month;
console.log(infoPazient);
let year;
year=prompt("Введите год рождения пациента", year);
console.log(year);
infoPazient[5]=year;
console.log(infoPazient);
let gender;
gender=prompt("Введите пол пациента", gender);
console.log(gender);
infoPazient[6]=gender;
console.log(infoPazient);
*/
var person = {
    "SNILS 1": ["Иванов","Иван","Иваныч", 15, "мая", 1974, "м", "исполнено"],
    "SNILS 2": ["Сидоров","Сидор","Сидорович", 20, "мая", 1980, "м", "медотвод"],
    "SNILS 3": ["Петрова","Мария","Ивановна", 1, "июня", 1975, "ж", "назначено"],
};
console.log(person);
SNILS4="SNILS 4"
/*
let lastname;
lastname=prompt("Введите фамилию пациента", lastname);
console.log(lastname);
infoPazient[0]=lastname;
console.log(infoPazient);
let firstname;
firstname=prompt("Введите имя пациента", firstname);
console.log(firstname);
infoPazient[1]=firstname;
console.log(infoPazient);
let middlename;
middlename=prompt("Введите отчество пациента", middlename);
console.log(middlename);
infoPazient[2]=middlename;
console.log(infoPazient);
let date;
date=prompt("Введите дату рождения пациента", date);
console.log(date);
infoPazient[3]=date;
console.log(infoPazient);
let month;
month=prompt("Введите месяц рождения пациента", month);
console.log(month);
infoPazient[4]=month;
console.log(infoPazient);
let year;
year=prompt("Введите год рождения пациента", year);
console.log(year);
infoPazient[5]=year;
console.log(infoPazient);
let gender;
gender=prompt("Введите пол пациента", gender);
console.log(gender);
infoPazient[6]=gender;
console.log(infoPazient);
person.SNILS4= infoPazient;
console.log(person);
*/
let SNILS;
var FirstFunction = function (person,SNILS) {
SNILS = prompt("Введите SNILS пациента", SNILS);
infoname=person[SNILS];
console.log(infoname);
alert("Информация о пациенте"+infoname);
statusPRIV = person[SNILS][7];
};
/*
let phase;
phase=prompt("Введите действие или медотвод или назначено или исполнено ", phase);
infoname.push(phase);
console.log(infoname);
person[SNILS]=infoname;
console.log(person);
*/
var SecondFunction= function (statusPRIV, infoname){
console.log(statusPRIV);
if (statusPRIV =="исполнено") {
alert("Отказано в прививке пациенту"+infoname)
}else if (statusPRIV =="медотвод") {
alert("Отказано в прививке пациенту"+infoname)
} else {
alert("Исполнить прививку пациенту"+infoname)
}
}
ForSecond=FirstFunction(person,SNILS);
SecondFunction(statusPRIV, infoname);
while (confirm("Продоложить проверку првивочного статуса?")) {
ForSecond=FirstFunction(person,SNILS);
SecondFunction(statusPRIV, infoname);
}
console.log("Сеанс проверки прививочного статуса закончен");