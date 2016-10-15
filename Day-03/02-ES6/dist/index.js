(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var idSymbol = Symbol(),
    nameSymbol = Symbol();

var Employee = exports.Employee = function () {
    function Employee(id, name, salary) {
        _classCallCheck(this, Employee);

        this[idSymbol] = id;
        this[nameSymbol] = name;
        this.salary = salary;
    }

    _createClass(Employee, [{
        key: 'print',
        value: function print() {
            console.log('id = ', this.id, ', name = ', this.name, ', salary = ', this.salary);
        }
    }, {
        key: 'id',
        get: function get() {
            return this[idSymbol];
        }
    }, {
        key: 'name',
        get: function get() {
            console.log('name getter triggered');
            return this[nameSymbol];
        },
        set: function set(value) {
            console.log('name setter triggered');
            if (!value) return;
            this[nameSymbol] = value;
        }
    }], [{
        key: 'isEmployee',
        value: function isEmployee(obj) {
            return obj instanceof Employee;
        }
    }]);

    return Employee;
}();

var counterSymbol = Symbol();

var Spinner = exports.Spinner = function () {
    function Spinner() {
        _classCallCheck(this, Spinner);

        this[counterSymbol] = 0;
    }

    _createClass(Spinner, [{
        key: 'up',
        value: function up() {
            return ++this[counterSymbol];
        }
    }, {
        key: 'down',
        value: function down() {
            return --this[counterSymbol];
        }
    }]);

    return Spinner;
}();

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Employee2 = require('./Employee.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullTimeEmployee = function (_Employee) {
	_inherits(FullTimeEmployee, _Employee);

	function FullTimeEmployee(id, name, salary, benefits) {
		_classCallCheck(this, FullTimeEmployee);

		var _this = _possibleConstructorReturn(this, (FullTimeEmployee.__proto__ || Object.getPrototypeOf(FullTimeEmployee)).call(this, id, name, salary));

		_this.benefits = benefits;
		return _this;
	}

	_createClass(FullTimeEmployee, [{
		key: 'print',
		value: function print() {
			console.log('id = ', this.id, ', name = ', this.name, ', salary = ', this.salary, ' benefits = ', this.benefits);
		}
	}]);

	return FullTimeEmployee;
}(_Employee2.Employee);

exports.default = FullTimeEmployee;

},{"./Employee.js":1}],3:[function(require,module,exports){
'use strict';

var _Employee = require('./Employee.js');

var _FullTimeEmployee = require('./FullTimeEmployee.js');

var _FullTimeEmployee2 = _interopRequireDefault(_FullTimeEmployee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.fte = new _FullTimeEmployee2.default(100, 'Magesh', 10000, 'Compoff');
fte.print();

var spinner = new _Employee.Spinner();
window.spinner = spinner;

},{"./Employee.js":1,"./FullTimeEmployee.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRW1wbG95ZWUuanMiLCJzcmMvRnVsbFRpbWVFbXBsb3llZS5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFJLFdBQVcsUUFBZjtBQUFBLElBQ0ksYUFBYSxRQURqQjs7SUFHYSxRLFdBQUEsUTtBQUNULHNCQUFZLEVBQVosRUFBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsRUFBNkI7QUFBQTs7QUFDMUIsYUFBSyxRQUFMLElBQWlCLEVBQWpCO0FBQ0EsYUFBSyxVQUFMLElBQW1CLElBQW5CO0FBQ0EsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNGOzs7O2dDQWVNO0FBQ0osb0JBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsS0FBSyxFQUExQixFQUE4QixXQUE5QixFQUEyQyxLQUFLLElBQWhELEVBQXVELGFBQXZELEVBQXNFLEtBQUssTUFBM0U7QUFDRjs7OzRCQWhCTztBQUNOLG1CQUFPLEtBQUssUUFBTCxDQUFQO0FBQ0Q7Ozs0QkFFUztBQUNSLG9CQUFRLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLG1CQUFPLEtBQUssVUFBTCxDQUFQO0FBQ0QsUzswQkFFUSxLLEVBQU07QUFDYixvQkFBUSxHQUFSLENBQVksdUJBQVo7QUFDQSxnQkFBSSxDQUFDLEtBQUwsRUFBWTtBQUNaLGlCQUFLLFVBQUwsSUFBbUIsS0FBbkI7QUFDRDs7O21DQUlpQixHLEVBQUk7QUFDbkIsbUJBQU8sZUFBZSxRQUF0QjtBQUNGOzs7Ozs7QUFHTCxJQUFJLGdCQUFnQixRQUFwQjs7SUFDYSxPLFdBQUEsTztBQUNULHVCQUFhO0FBQUE7O0FBQ1QsYUFBSyxhQUFMLElBQXNCLENBQXRCO0FBQ0g7Ozs7NkJBQ0c7QUFDQSxtQkFBTyxFQUFFLEtBQUssYUFBTCxDQUFUO0FBQ0g7OzsrQkFDSztBQUNGLG1CQUFPLEVBQUUsS0FBSyxhQUFMLENBQVQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDekNMOzs7Ozs7OztJQUVxQixnQjs7O0FBQ3BCLDJCQUFZLEVBQVosRUFBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsRUFBOEIsUUFBOUIsRUFBdUM7QUFBQTs7QUFBQSxrSUFDaEMsRUFEZ0MsRUFDNUIsSUFENEIsRUFDdEIsTUFEc0I7O0FBRXRDLFFBQUssUUFBTCxHQUFnQixRQUFoQjtBQUZzQztBQUd0Qzs7OzswQkFDTTtBQUNELFdBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsS0FBSyxFQUExQixFQUE4QixXQUE5QixFQUEyQyxLQUFLLElBQWhELEVBQXVELGFBQXZELEVBQXNFLEtBQUssTUFBM0UsRUFBbUYsY0FBbkYsRUFBbUcsS0FBSyxRQUF4RztBQUNGOzs7Ozs7a0JBUGdCLGdCOzs7OztBQ0ZyQjs7QUFDQTs7Ozs7O0FBRUEsT0FBTyxHQUFQLEdBQWEsK0JBQXFCLEdBQXJCLEVBQTBCLFFBQTFCLEVBQW9DLEtBQXBDLEVBQTJDLFNBQTNDLENBQWI7QUFDQSxJQUFJLEtBQUo7O0FBRUEsSUFBSSxVQUFVLHVCQUFkO0FBQ0EsT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBpZFN5bWJvbCA9IFN5bWJvbCgpLFxuICAgIG5hbWVTeW1ib2wgPSBTeW1ib2woKTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVle1xuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBzYWxhcnkpe1xuICAgICAgIHRoaXNbaWRTeW1ib2xdID0gaWQ7XG4gICAgICAgdGhpc1tuYW1lU3ltYm9sXSA9IG5hbWU7XG4gICAgICAgdGhpcy5zYWxhcnkgPSBzYWxhcnk7XG4gICAgfVxuICAgIGdldCBpZCgpe1xuICAgICAgcmV0dXJuIHRoaXNbaWRTeW1ib2xdO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCl7XG4gICAgICBjb25zb2xlLmxvZygnbmFtZSBnZXR0ZXIgdHJpZ2dlcmVkJyk7XG4gICAgICByZXR1cm4gdGhpc1tuYW1lU3ltYm9sXTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSl7XG4gICAgICBjb25zb2xlLmxvZygnbmFtZSBzZXR0ZXIgdHJpZ2dlcmVkJyk7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICB0aGlzW25hbWVTeW1ib2xdID0gdmFsdWU7XG4gICAgfVxuICAgIHByaW50KCl7XG4gICAgICAgY29uc29sZS5sb2coJ2lkID0gJywgdGhpcy5pZCwgJywgbmFtZSA9ICcsIHRoaXMubmFtZSAsICcsIHNhbGFyeSA9ICcsIHRoaXMuc2FsYXJ5KTtcbiAgICB9XG4gICAgc3RhdGljIGlzRW1wbG95ZWUob2JqKXtcbiAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRW1wbG95ZWU7XG4gICAgfVxufVxuXG5sZXQgY291bnRlclN5bWJvbCA9IFN5bWJvbCgpO1xuZXhwb3J0IGNsYXNzIFNwaW5uZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpc1tjb3VudGVyU3ltYm9sXSA9IDA7XG4gICAgfVxuICAgIHVwKCl7XG4gICAgICAgIHJldHVybiArK3RoaXNbY291bnRlclN5bWJvbF07XG4gICAgfVxuICAgIGRvd24oKXtcbiAgICAgICAgcmV0dXJuIC0tdGhpc1tjb3VudGVyU3ltYm9sXTtcbiAgICB9XG59IiwiaW1wb3J0IHtFbXBsb3llZX0gZnJvbSAnLi9FbXBsb3llZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFRpbWVFbXBsb3llZSBleHRlbmRzIEVtcGxveWVle1xuXHRjb25zdHJ1Y3RvcihpZCwgbmFtZSwgc2FsYXJ5LCBiZW5lZml0cyl7XG5cdFx0c3VwZXIoaWQsIG5hbWUsIHNhbGFyeSk7XG5cdFx0dGhpcy5iZW5lZml0cyA9IGJlbmVmaXRzO1xuXHR9XG5cdHByaW50KCl7XG4gICAgICAgY29uc29sZS5sb2coJ2lkID0gJywgdGhpcy5pZCwgJywgbmFtZSA9ICcsIHRoaXMubmFtZSAsICcsIHNhbGFyeSA9ICcsIHRoaXMuc2FsYXJ5LCAnIGJlbmVmaXRzID0gJywgdGhpcy5iZW5lZml0cyk7XG4gICAgfVxufSIsImltcG9ydCB7U3Bpbm5lcn0gZnJvbSAnLi9FbXBsb3llZS5qcyc7XG5pbXBvcnQgRnVsbFRpbWVFbXBsb3llZSBmcm9tICcuL0Z1bGxUaW1lRW1wbG95ZWUuanMnO1xuXG53aW5kb3cuZnRlID0gbmV3IEZ1bGxUaW1lRW1wbG95ZWUoMTAwLCAnTWFnZXNoJywgMTAwMDAsICdDb21wb2ZmJyk7XG5mdGUucHJpbnQoKTtcblxubGV0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcigpO1xud2luZG93LnNwaW5uZXIgPSBzcGlubmVyO1xuIl19
