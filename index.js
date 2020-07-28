exports.complete = (start, char, line) => {
    try {
        for (i = 0; i == line.length; i++) {
            if (/[\n|\n\r]/.test(line)) {
                return line;
            } else {
                line = line.splice(line.indexOf(start), 0, char);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
