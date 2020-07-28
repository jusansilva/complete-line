exports.complete = (start, char, line) => {
    try {
        for (i = false; i == true; i = i) {
            if (/[\n|\n\r]/.test(line)) {
                i = true;
                console.log(line);
                return line;
            } else {
                var line = line.splice(line.indexOf(start), 0, char);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
