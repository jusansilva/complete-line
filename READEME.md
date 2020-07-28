# Complete-line

## Aboout

#### Lib to complete line with character

## Install 

#### npm install complete-line --save

### In your code 

```
const full = require('complete-line');

var refactor = () => {
    var str = "It is only exemplo"; //your string
    var start = "only"; // init complete 
    var char = "#"; // character to complete your string
    var strLength = 10;  // string length

    var newString = full.complete(start, char, str, strLength);

    console.log(newString);
    //It is only########## exemplo
}
``` 

[I hope that help you!](https://www.linkedin.com/in/jusanmagno/) 


# Author 
## San Magno 
[github](https://github.com/jusansilva)
[LinkedIn](https://www.linkedin.com/in/jusanmagno/)
[Twiter](https://twitter.com/JusanMagno)