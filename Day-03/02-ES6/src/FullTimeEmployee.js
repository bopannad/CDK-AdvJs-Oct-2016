import {Employee} from './Employee.js'

export default class FullTimeEmployee extends Employee{
	constructor(id, name, salary, benefits){
		super(id, name, salary);
		this.benefits = benefits;
	}
	print(){
       console.log('id = ', this.id, ', name = ', this.name , ', salary = ', this.salary, ' benefits = ', this.benefits);
    }
}