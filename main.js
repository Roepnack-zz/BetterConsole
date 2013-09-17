
//better console functions!
//set windows.console and console to be accessible through _console
var _console = (window.console = window.console || {});

//repalce stanard console with the better console
window.  = function() {

	//@PUBLIC
	//Mode functions
	function setSiteLivePublic() {
		setInDevelopmentMode(false);
	}
	function setSiteInDevelopmentPublic() {
		setInDevelopmentMode(true);
	}

	//Log functions
	function debugPublic(text) {
		_write(_console.debug, arguments.callee.caller.name, text);
	}
	function logPublic(text) {
		_write(_console.log, arguments.callee.caller.name, text);
	}
	function warnPublic(text) {
		_write(_console.warn, arguments.callee.caller.name, text);
	}
	function errorPublic(text) {
		_write(_console.error, arguments.callee.caller.name, text);
	}

	//@PRIVATE

	//Get console if the current browser has one
	//console = (window.console = window.console || {});
	
	//Save the time of load
	var loadTime = Date.now();

	//mode for display and functionality
	devMode = true;
	//development mode setter
	function setInDevelopmentMode(mode) {
		devMode = mode;
	}

	//Get the current seconds since page load
	function secondsSincePageLoad(time) {
		return (Date.now() - time)/1000;
	}

	//write to the console with appropriate information
	function _write(fn, caller, text) {
		if( devMode && typeof(fn) === 'function'){
			if( caller !== '') {
				eval('_console.' + fn.name + '("' 
								+ caller  + ' fired ' + fn.name + ' ' + secondsSincePageLoad(loadTime) + ' seconds after page load" '
					 + ')');
			} else {
				eval('_console.' + fn.name + '("' 
								+ fn.name + ' ' + secondsSincePageLoad(loadTime) + ' seconds after page load"' 
					+ ')');
			}		

			eval('_console.' + fn.name + '("' + text.replace('"', '\\"') + '")');	
		}
	}	

	//Revealing Module - Allow access to public methods only
	return {
		debug: debugPublic,
		error: errorPublic,
		log:   logPublic,
		warn:  warnPublic,
		siteLive:  setSiteLivePublic,
		siteInDevelopment: setSiteInDevelopmentPublic
	};
}();

function foo(){
	console.debug('I\'m debugging');
}
function bar(){
	console.log('I\'m logging');
}
function baz(){
	console.warn('I\'m warning');
}
function qux(){
	console.error("I'm er\"roring");
}


$(document).ready(function() {
	foo();
	console.siteLive();
	bar();
	console.siteInDevelopment();
	baz();
	qux();
});
