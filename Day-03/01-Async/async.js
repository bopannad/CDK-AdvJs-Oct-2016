var pgm = (function(){
	function addSync(x,y){
		console.log('     [Service] processing ', x , ' and ', y);
		var result = x + y;
		console.log('     [Service] returning result');
		return result;
	}

	function addSyncClient(x,y){
		console.log('[Client] triggering addSync');
		var result = addSync(x,y);
		console.log('[Client] result = ', result);
	}

	function addAsyncCallback(x,y, onResult){
		console.log('     [Service] processing ', x , ' and ', y);
		setTimeout(function(){
			var result = x + y;
			console.log('     [Service] returning result');
			if (typeof onResult === 'function')
				onResult(result);
		}, 5000);
	}

	function addAsyncCallbackClient(x,y){
		console.log('[Client] triggering addAsyncCallback');
		addAsyncCallback(x,y, function(result){
			console.log('[Client] result = ', result);	
		});
	}

	var addAsyncEvents = (function(){
		var subscribers = [];
		function subscribe(callback){
			subscribers.push(callback);
		}
		function add(x,y){
			console.log('     [Service] processing ', x , ' and ', y);
			setTimeout(function(){
				var result = x + y;
				console.log('     [Service] returning result');
				subscribers.forEach(function(subscriber){
					subscriber(result);
				})
			}, 5000);
		}
		return {
			add : add,
			subscribe : subscribe
		}
	})();

	function addAsyncPromise(x,y){
		console.log('     [Service] processing ', x , ' and ', y);
		var promise = new Promise(function(resolve, reject){
			setTimeout(function(){
				var result = x + y;
				console.log('     [Service] returning result');
				resolve(result);
			}, 5000);
		});
		return promise;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	}
})()