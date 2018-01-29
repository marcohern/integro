"use strict";
(function () {
	String.prototype.rpad = function(pad, length) {
	    var s = this;
	    while (s.length < length) s += pad;
	    return s;
	}

	String.prototype.lpad = function(pad, length) {
	    var s = this;
	    while (s.length < length) s = pad + s;
	    return s;
	}

	String.prototype.numParts = function() {
		return this.split('.');
	}

	String.prototype.numExplode = function(prc = 2, div = 3) {
		var parts = this.numParts();
		var numValue = parts[0];
		var decValue = '';
		if (parts.length > 1) decValue = parts[1];
		var len = numValue.length;
	    var offset = (len % div);
	    if (offset==0) offset=div;
	    var res = [];
	    var s = 0;
	    var d = offset;
	    var i = 0;
	    while (s<len) {
	        res[i] = numValue.substr(s, d);
	        s += d;
	        d = div;
	        i++;
	    }

	    var decPart = decValue.substr(0, prc);
	    if (decPart.length < prc) decPart = decPart.rpad("0", prc);
	    res[i] = decPart;
	    return res;
	}

	Number.prototype.format = function(precision=2, decimal='.', divider=',', divide=3) {
		var thisstr = this.toString();
		var peices = thisstr.numExplode(precision, divide);
		var str = '';
		var last = peices.length-1;
		for (var i=0;i<last;i++) {
			if (i>0) str += divider;
			str += peices[i];
		}
		if (precision > 0)
			str += decimal + peices[last];
		return str;
	}
}());