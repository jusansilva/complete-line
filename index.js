exports.complete = (start, char, str, strLength) => {
    try {
        var NewStr ='';
        if(str.indexOf(start) == -1) return new Error('start not found');
        for (var i = 0; i < strLength; i++) {
            if (str.length > strLength) {
                return str;
            } else {
                str = NewStr.concat(str.slice(0, str.indexOf(start) + start.length),char, str.slice(str.indexOf(start) + start.length, str.length));
            }
        }
    } catch (error) {
        console.log(error);
    }
}