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
			for(var i=0; i < products.length-1; i++)
				for(var j = i + 1; j < products.length; j++)
					if (products[i].id > products[j].id){
						[products[i], products[j]] = [products[j], products[i]];
					}
		}
		sort();
		console.table(products);
	});
	describe("Any list by any attribute", function(){
		function sort(list, attributeName){
			for(var i=0; i < list.length-1; i++)
				for(var j = i + 1; j < list.length; j++)
					if (list[i][attributeName] > list[j][attributeName]){
						[list[i], list[j]] = [list[j], list[i]];
					}
		}
		describe("Products by cost", function(){
			sort(products, "cost");
			console.table(products);
		});

		describe("Products by units", function(){
			sort(products, "units");
			console.table(products);
		})
	})

	describe("Any list by any comparer", function(){
		function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j = i + 1; j < list.length; j++)
					if ( comparerFn(list[i], list[j]) > 0){
						[list[i], list[j]] = [list[j], list[i]];
					}
		}
		describe("Products by value [value = cost * units]", function(){
			/*var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value === p2Value) return 0;
				return 1;
			}*/
			/*var productComparerByValue = function(p1, p2){
				return (p1.cost * p1.value) - (p2.cost * p2.value);
			}*/
			var productComparerByValue = (p1, p2) => (p1.cost * p1.units) - (p2.cost * p2.units);
			sort(products, productComparerByValue);
			console.table(products);
		});
	});

	/*
	function sort(list, comparer){
		var comparerFn = comparer;
		if (typeof comparer === 'string'){
			comparerFn = function(lhs, rhs){
				if (lhs[comparer] > rhs[comparer]) return 1;
				if (lhs[comparer] === rhs[comparer]) return 0;
				return -1
			};
		}
		for(var i=0; i < list.length-1; i++)
			for(var j = i + 1; j < list.length; j++)
				if ( comparerFn(list[i], list[j]) > 0){
					var temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
	}
	*/
	
});

describe("Filtering", function(){
	describe("Products with category - 1", function(){
		function filterProductsWithCategory1(){
			var result = [];
			for(var i=0; i < products.length; i++)
				if (products[i].category === 1)
					result.push(products[i]);
			return result;
		}
		var productsWithCategory1 = filterProductsWithCategory1();
		console.table(productsWithCategory1);
	});

	describe("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i < list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}
		function negate(criteriaFn){
			return function(){
				return !criteriaFn.apply(this, arguments);
			};
		}
		describe("Category", function(){
			/*var category1Criteria = function(product){
				return product.category === 1;
			};*/

			var category1Criteria = (p) => p.category === 1;
			/*
			var nonCategory1Criteria = function(product){
				return product.category !== 1;
			};
			*/
			/*
			var nonCategory1Criteria = function(product){
				return !category1Criteria(product);
			};
			*/
			var nonCategory1Criteria = negate(category1Criteria);

			describe("Products with category 1", function(){
				var category1Products = filter(products, category1Criteria);
				console.table(category1Products);
			});
			describe("Non category 1 products", function(){
				var nonCategory1Products = filter(products, nonCategory1Criteria);
				console.table(nonCategory1Products);
			});
		});

		describe("Cost", function(){
			var costlyProductCriteria = function(product){
				return product.cost > 50;
			};
			/*
			var affordableProductCriteria = function(product){
				return product.cost <= 50;
			};
			*/
			/*
			var affordableProductCriteria = function(product){
				return !costlyProductCriteria(product);
			};
			*/
			var affordableProductCriteria = negate(costlyProductCriteria);

			describe("Costly products [ cost > 50 ]", function(){
				var costlyProducts = filter(products, costlyProductCriteria);
				console.table(costlyProducts);
			});
			describe("Affordable products [ cost <= 50 ]", function(){
				var affordableProducts = filter(products, affordableProductCriteria);
				console.table(affordableProducts);
			})
		});
	});
});

describe("All", function(){
	function all(list, criteriaFn){
		for(var i=0; i < list.length; i++)
			if (!criteriaFn(list[i]))
				return false;
		return true;
	}
	describe("Are all the items belong to category - 1 ?", function(){
		var category1Criteria = function(product){
			return product.category === 1;
		};
		var result = all(products, category1Criteria);
		console.log(result);
	});
})

describe("Any", function(){
	function any(list, criteriaFn){
		for(var i=0; i < list.length; i++)
			if (criteriaFn(list[i]))
				return true;
		return false;
	}
	describe("Are they any items belong to category - 1 ?", function(){
		var category1Criteria = function(product){
			return product.category === 1;
		};
		var result = any(products, category1Criteria);
		console.log(result);
	});
});

describe("GroupBy", function(){
	function groupBy(list, keySelectorFn){
		var result = {};
		for(var i=0; i < list.length; i++){
			var key = keySelectorFn(list[i]);
			/*if (typeof result[key] === 'undefined')
				result[key] = [];*/
			result[key] = result[key] || [];
			result[key].push(list[i]);
		}
		return result;
	}
	function printGroup(groupedList){
		for(var key in groupedList){
			describe("Key - " + key, function(){
				console.table(groupedList[key]);
			})
		}
	}
	describe("Products by category", function(){
		var categoryKeySelector = function(product){
			return product.category;
		};
		var productsByCategory = groupBy(products, categoryKeySelector);
		printGroup(productsByCategory);
	});

	describe("Products by cost", function(){
		var costKeySelector = function(product){
			return product.cost <= 50 ? "affordable" : "costly";
		};
		var productsByCost = groupBy(products, costKeySelector);
		printGroup(productsByCost);
	});
});

describe("Transform", function(){
	function transform(list, transformFn){
		var result = [];
		for(var i=0; i < list.length; i++)
			result.push(transformFn(list[i]));
		return result;
	}

	describe("Products list after 10% discount", function(){
		var discountedProducts = transform(products, function(product){
			return {
				id : product.id,
				name : product.name,
				units : product.units,
				cost : product.cost * 0.9,
				category : product.category
			};
		});
		console.table(discountedProducts);
	})
})



