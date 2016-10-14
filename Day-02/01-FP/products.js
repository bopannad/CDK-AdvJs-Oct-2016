var products = [
	{id : 4, name : 'Pen', cost : 50, units : 30, category : 1},
	{id : 9, name : 'Hen', cost : 70, units : 70, category : 2},
	{id : 3, name : 'Den', cost : 80, units : 40, category : 2},
	{id : 5, name : 'Ten', cost : 60, units : 60, category : 1},
	{id : 7, name : 'Zen', cost : 70, units : 90, category : 1},
	{id : 2, name : 'Len', cost : 20, units : 50, category : 1},
];

/*
sort
filter
all
any
groupBy
min
max
sum
aggregate
transform
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}


describe('Default List', function(){
	console.table(products);
});

describe('Sorting', function(){
	describe('Default Sort [Products by id]', function(){
		function sort(){

		}
		sort()
		console.table(products);
	});

	
});



