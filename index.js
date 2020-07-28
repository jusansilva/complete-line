exports.complete = (start, char, line) => {
    try {
        for (var i = 0; i < line.length; i++) {
            if (line.length > 54) {
                return line;
            } else {
                line = line.splice(line.indexOf(start), 0, char);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
