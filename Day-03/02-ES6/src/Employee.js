let idSymbol = Symbol(),
    nameSymbol = Symbol();

export class Employee{
    constructor(id, name, salary){
       this[idSymbol] = id;
       this[nameSymbol] = name;
       this.salary = salary;
    }
    get id(){
      return this[idSymbol];
    }

    get name(){
      console.log('name getter triggered');
      return this[nameSymbol];
    }

    set name(value){
      console.log('name setter triggered');
      if (!value) return;
      this[nameSymbol] = value;
    }
    print(){
       console.log('id = ', this.id, ', name = ', this.name , ', salary = ', this.salary);
    }
    static isEmployee(obj){
       return obj instanceof Employee;
    }
}

let counterSymbol = Symbol();
export class Spinner{
    constructor(){
        this[counterSymbol] = 0;
    }
    up(){
        return ++this[counterSymbol];
    }
    down(){
        return --this[counterSymbol];
    }
}