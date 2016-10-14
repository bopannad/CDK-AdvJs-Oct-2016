
var radio = (function(){
	var subscribers = {

	}
	var eventContext = null;

	function radio(eventName){
		eventContext = eventName;
		return radio;
	}

	radio.subscribe = function(){
		subscribers[eventContext] = subscribers[eventContext] || [];
		subscribers[eventContext] = subscribers[eventContext].concat(Array.prototype.slice.call(arguments, 0));
		return radio;
	}

	radio.broadcast = function(){
		var subscriptions = subscribers[eventContext] || [],
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
		return radio;
	};

	/*radio.subscribe = function(){
		subscribers[eventContext] = subscribers[eventContext] || [];
		for(var i=0; i < arguments.length; i++){
			if (typeof arguments[i] === 'function'){
				subscribers[eventContext].push(arguments[i]);
			} else if (Array.isArray(arguments[i])){
				var callbackArray = arguments[i],
					callbackFn = callbackArray[0],
					callbackContext = callbackArray[1];
				subscribers[eventContext].push(callbackFn.bind(callbackContext)); 
			}
		}
		return radio;
	}

	radio.broadcast = function(){
		var subscriptions = subscribers[eventContext] || [],
			args = arguments;
		subscriptions.forEach(function(subscription){
			return subscription.apply(this, args);
		});
		return radio;
	};*/

	radio.unsubscribe = function(){
		var callbacks = Array.prototype.slice.call(arguments, 0);
		callbacks.forEach(function(callback){
			subscribers[eventContext] = subscribers[eventContext].filter(function(subscription){
				if (typeof subscription === 'function'){
					return subscription !== callback;
				} else {
					return subscription[0] !== callback;
				}
			})
		});
		return radio;
	}
	return radio;
})();