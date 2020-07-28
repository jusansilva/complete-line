exports.complete = (start, char, line) => {
    try {
        var str ='';
        for (var i = 0; i < str.length; i++) {
            if (line.length > 54) {
                return str;
            } else {
                str.concat(line.slice(0, line.indexOf(start)),char, line.slice(line.indexOf(start), line.length));
            }
        }
    } catch (error) {
        console.log(error);
    }
}
