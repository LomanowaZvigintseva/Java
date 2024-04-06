class Patient {
    constructor(n,f,sn,b,g,st) {
        this.N= n;
        this.F= f;
        this.SN= sn;
        this.B= new Date(b);
        this.G= g;
        this.ST= st;
    }
setById() {
document.getElementById("N").textContent = this.N;
document.getElementById("F").textContent = this.F;
document.getElementById("SN").textContent = this.SN;
document.getElementById("B").textContent = this.B.getFullYear();
document.getElementById("G").textContent = this.G;
document.getElementById("ST").textContent = this.ST;
}
}
/*let Ivanov = new Patient("Иванов","Иван","Иваныч", new Date(1980, 6, 10), "м","Назначено") 
Ivanov.setById();*/
let Petrov = new Patient("Петров", "Антон", "Николаевич", new Date(1945, 12, 1), "м","Назначено")
/*let Sidorov = new Patient("Сидоров", "-", "-", new Date(1976, 5, 2), "м","Исполнено")*/
Petrov.setById();
/*Sidorov.setById();*/
console.log(Ivanov);
