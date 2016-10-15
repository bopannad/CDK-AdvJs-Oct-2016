
var radio = (function(){
	
	var radios = {};

	function radio(eventName){
		radios[eventName] = radios[eventName] || new Radio();
		return radios[eventName];
	}

	function Radio(){
		this.__subscribers__ = [];
	}

	Radio.prototype.subscribe = function(){
		this.__subscribers__ = this.__subscribers__ || [];
		this.__subscribers__ = this.__subscribers__.concat(Array.prototype.slice.call(arguments, 0));
		return this;
	}
	
	Radio.prototype.broadcast = function(){
		var subscriptions = this.__subscribers__ || [],
			args = arguments;
		subscriptions.forEach(function(subscription){
			if (typeof subscription === 'function'){
				return subscription.apply(this, args);
			} else if (Array.isArray(subscription)){
				var callback = subscription[0]
					context = subscription[1];
				return callback.apply(context, args);
			}
		});
		return this;
	};

	Radio.prototype.unsubscribe = function(){
		var callbacks = Array.prototype.slice.call(arguments, 0);
		var self = this;
		callbacks.forEach(function(callback){
			self.__subscribers__ = self.__subscribers__.filter(function(subscription){
				if (typeof subscription === 'function'){
					return subscription !== callback;
				} else {
					return subscription[0] !== callback;
				}
			})
		});
		return self;
	}
	return radio;
})();