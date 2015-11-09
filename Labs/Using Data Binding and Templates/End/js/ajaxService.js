var ajaxService = function() {

	this.getJSON = function(url) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("Accept", "application/json");

		var deferred = Q.defer();

		xmlhttp.onreadystatechange = (function(xmlhttp, defer) {
	    	return function() {
		   		if (xmlhttp.readyState==4) {

		           if (xmlhttp.status==200) {
		                var data = (xmlhttp.responseText) ? JSON.parse(xmlhttp.responseText) : null;
		                defer.resolve(data);
		           }
		           else {
		                defer.reject(xmlhttp);
		           }

		        }
	    	}
		})(xmlhttp, deferred);

		xmlhttp.send();
		return deferred.promise;
	};

	return this;

}();

