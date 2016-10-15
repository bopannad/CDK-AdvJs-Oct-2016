function add(...args){
	function parseArg(n){
		if (Array.isArray(n)) return add(...n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	//return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
	return args.reduce( (result , n) => parseArg(n) + result, 0 );
}