exports.complete = function(start, char, str, strLength) {
    try {
        var NewStr ='';
        for (var i = 0; i < strLength; i++) {
            if (line.length > 54) {
                return str;
            } else {
                str = NewStr.concat(str.slice(0, str.indexOf(start) + start.length),char, str.slice(str.indexOf(start) + start.length, str.length));
            }
        }
    } catch (error) {
        console.log(error);
    }
}