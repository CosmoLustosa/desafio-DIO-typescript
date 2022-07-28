interface Employee {
    code: number,
    name: string
};

let empregado: Employee = {
    code: 10,
    name:"John",
}

//
const func1onario3: {code: number; name: string} = {
    code: 10, 
    name: "Antonio"
}

//outra forma
const empregado2 = {} as Employee;
empregado2.code = 15;
empregado2.name = "Marcos";

console.log(empregado)