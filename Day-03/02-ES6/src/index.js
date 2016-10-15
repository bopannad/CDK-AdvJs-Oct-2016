import {Spinner} from './Employee.js';
import FullTimeEmployee from './FullTimeEmployee.js';

window.fte = new FullTimeEmployee(100, 'Magesh', 10000, 'Compoff');
fte.print();

let spinner = new Spinner();
window.spinner = spinner;
