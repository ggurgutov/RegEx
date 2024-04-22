// Using the Test Method
(function() {
    let sentence = 'The dog chased the cat.'
    let regex= /the/;
    
    let myString = 'Hellow Worlds';
    let myRegex = /World/;
    let result = myRegex.test(myString);
    console.log(result); // true
})();


// Match Literal Strings
(function() {
    let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
    let waldoRegex = /Waldo/;
    let result = waldoRegex.test(waldoIsHiding);
    console.log(result); // true
})();

// Match a Literal String with Different Possibilities
(function() {
    let petString = 'James has a pet cat.';
    let petRegex = /dog|cat|bird|fish/;
    let result = petRegex.test(petString);
    console.log(result); // true
})();

// Ignore Case While Matching
(function() {
    let myString = 'freeCodeCamp';
    let fccRegex = /freecodecamp/i;
    let result = fccRegex.test(myString);
    console.log(result); // true
})();

// Extract matches
(function() {
    let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/;
    let result = extractStr.match(codingRegex);
    console.log(result); // [ 'coding', index: 18, input: 'Extract the word coding from this string.', groups: undefined ]
})();

// Find More Than the First Match
(function() {
    let testStr = 'Repeat, Repeat, Repeat';
    // g flag is used to search or extract a pattern more than once
    let ourRegex = /Repeat/g;
    let result1 = testStr.match(ourRegex);
    console.log(result1); // [ 'Repeat', 'Repeat', 'Repeat' ]

    // Find all the word 'Twinkle' in the string - incase sensitive
    let twinkleStar = 'Twinkle, twinkle, little star';
    let starRegex = /twinkle/gi;
    let result2 = twinkleStar.match(starRegex);
    console.log(result2); // [ 'Twinkle', 'twinkle' ]
})();

// Match Anything with Wildcard Period
(function() {
    let humStr = 'I\'ll hum a song';
    let hugStr = 'Bear hug';
    let huRegex = /hu./;
    humStr.match(huRegex); // [ 'hum', index: 5, input: 'I\'ll hum a song', groups: undefined ]
    hugStr.match(huRegex); // [ 'hug', index: 5, input: 'Bear hug', groups: undefined ]

    // period is a wildcard for any one character
    let exampleStr = 'Let\'s have fun with regular expressions!';
    let unRegex = /.un/;
    let result = unRegex.test(exampleStr);
    console.log(result); // true
})();

// Match Single Character with Multiple Possibilities
(function() {
    let quote = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';
    let vowelRegex = /[aeiou]/gi;
    let res = quote.match(vowelRegex);
    console.log(res);

    let bigStr = 'big';
    let bagStr = 'bag';
    let bugStr = 'bug';
    let bogStr = 'bog';
    let bgRegex = /b[aiu]g/;
    bigStr.match(bgRegex); // [ 'big', index: 0, input: 'big', groups: undefined ]
    bagStr.match(bgRegex); // [ 'bag', index: 0, input: 'bag', groups: undefined ]
    bugStr.match(bgRegex); // [ 'bug', index: 0, input: 'bug', groups: undefined ]
    bogStr.match(bgRegex); // null
})();

// Match Letters of the Alphabet
(function() {
    let quote = 'The quick brown fox jumps over the lazy dog.';
    let alphabetRegex = /[a-z]/gi;
    let result = quote.match(alphabetRegex);
    console.log(result);
})();

// Match Numbers and Letters of the Alphabet
(function() {
    let quote = 'Blueberry 3.141592653s are delicious.';
    let myRegex = /[h-s2-6]/gi;
    let result = quote.match(myRegex);
    console.log(result);
})();

// Match Single Characters Not Specified
(function() {
    let quote = '3 blind mice.';
    // negated character sets in regex are denoted by the caret character ^
    let myRegex = /[^0-9aeiou]/gi;
    let result = quote.match(myRegex);
    console.log(result);
})();

// Match Characters that Occur One or More Times
(function() {
    let difficultSpelling = 'Mississippis';
    let myRegex = /s+/g;
    let result = difficultSpelling.match(myRegex);
    console.log(result);
})();

// Match Characters that Occur Zero or More Times
(function() {
    let soccerWord = 'gooooooooal!';
    let gPhrase = 'gut feeling';
    let oPhrase = 'over the moon';
    // match 'g' and then match 'o' zero or more times
    let goRegex = /go*/;
    soccerWord.match(goRegex); // [ 'goooooooo', index: 0, input: 'gooooooooal!', groups: undefined ]
    gPhrase.match(goRegex); // [ 'g', index: 0, input: 'gut feeling', groups: undefined ]
    oPhrase.match(goRegex); // null

    let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
    // match 'A' and then match 'a' zero or more times
    let chewieRegex = /Aa*/;
    let result = chewieQuote.match(chewieRegex);
    console.log(result);
})();

// Find Characters with Lazy Matching
(function() {
    let string = 'titanic';
    // greedy matching
    // match 't' and then match any character from 'a' to 'z' zero or more times and then match 'i'
    let myRegex1 = /t[a-z]*i/;
    // let myRegex1 = /t[a-z]*?i/; // lazy matching - match 't' and then match 'i'
    let result1 = string.match(myRegex1);
    console.log(result1);

    let text = '<h1>Winter is coming</h1>';
    // let myRegex = /<.*>/; // greedy matching < h1>Winter is coming</h1 >
    let myRegex = /<.*?>/; // lazy matching
    let result = text.match(myRegex);
    console.log(result);
})(); 

// Find One or More Criminals in a Hunt
(function() {
    let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
    let reCriminals = /C+/; // match 'C' one or more times
    let criminals = 'CC';
    let result = criminals.match(reCriminals);
    console.log(result);
})();

// Match Beginning String Patterns
(function() {
    let rickyAndCal = 'Cal and Ricky both like racing.';
    // let rickyAndCal = 'Ricky and Cat both like racing.'; // false - 'Cal' is not at the beginning of the string
    // use caret character ^ to search for patterns at the beginning of strings
    let calRegex = /^Cal/;
    let result = calRegex.test(rickyAndCal);
    console.log(result);
})();

// Match Ending String Patterns
(function() {
    let caboose = 'The last car on a train is the caboose';
    // use dollar sign $ to search for patterns at the end of strings
    let lastRegex = /caboose$/; // match 'caboose' at the end of the string
    let result = lastRegex.test(caboose);
    console.log(result);
})();

// Match All Letters and Numbers
(function() {
    let quote = 'The five boxing wizards jump quickly.';
    // \w is a shorthand character class ([A-za-z0-9_]) to match all letters and numbers
    let alphabetRegexV2 = /\w/g;
    let result = quote.match(alphabetRegexV2);
    console.log(result);
})();

// Match Everything But Letters and Numbers
(function() {
    let quote = 'The five boxing wizards jump quickly.';
    // \W is a shorthand character class ([^A-za-z0-9_]) to match everything but letters and numbers
    let nonAlphabetRegex = /\W/g;
    let result = quote.match(nonAlphabetRegex);
    console.log(result);
})();

// Match All Numbers
(function() {
    let numString = 'Your sandwich will be $5.00';
    // \d is a shorthand character class ([0-9]) to match all numbers
    let numRegex = /\d/g;
    let result = numString.match(numRegex);
    console.log(result);
})();

// Match All Non-Numbers
(function() {
    let numString = 'Your sandwich will be $5.00';
    // \D is a shorthand character class ([^0-9]) to match all non-numbers
    let noNumRegex = /\D/g;
    let result = numString.match(noNumRegex);
    console.log(result);
})();

// Restrict Possible Usernames
(function() {
    // 1) If there are numbers in the username, they must be at the end.
    // 2) Letters can be lowercase and uppercase.
    // 3) At least two characters long. Two-letter names can't have numbers.
    let username = 'JackOfAllTrades';
    // 1) numbers should be at the end, so letters should be at the beginning
    // let userCheck = /^[A-Za-z]{2,}\d*$/; // {2,} - match two or more characters

    let userCheck = /^[A-Za-z]{2,}\d*$/;
    // let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
    let result = userCheck.test(username);
    console.log(result);
})();

// Match Whitespace
(function() {
    let sample = 'Whitespace is important in separating words';
    // \s is a shorthand character class ([\r\t\f\n\v]) to match all whitespace characters
    let countWhiteSpace = /\s/g;
    let result = sample.match(countWhiteSpace);
    console.log(result);
})();

// Match Non-Whitespace Characters
(function() {
    let sample = 'Whitespace is important in separating words';
    // \S is a shorthand character class ([^\r\t\f\n\v]) to match all non-whitespace characters
    let countNonWhiteSpace = /\S/g;
    let result = sample.match(countNonWhiteSpace);
    console.log(result);
})();

// Specify Upper and Lower Number of Matches
(function() {
    let ohStr = 'Ohhhhh no';
    // quantity specifiers using curly brackets
    // it matches only the word 'Oh' that has 3 to 5 times letter 'h' and followed by a space and the word 'no'
    let ohRegex = /Oh{3,5}\sno/;
    let result = ohRegex.test(ohStr);
    console.log(result);
})();

// Specify Only the Lower Number of Matches
(function() {
   let haStr = 'Hazzzzah';
    // it matches only the word 'Hazzah' that has 4 or more letter 'z'
    let haRegex = /Haz{4,}ah/;
    let result = haRegex.test(haStr);
})();

// Specify Exact Number of Matches
(function() {
    let timStr = 'Timmmmber';
    // it matches only the word 'Timber' that has exactly 4 letter 'm'
    let timRegex = /Tim{4}ber/;
    let result = timRegex.test(timStr);
    console.log(result);
})();

// Check for All or None
(function() {
    let favWord = 'favorite';
    // it matches only the word 'favorite' that has 0 or more letter 'u'
    let favRegex = /favou?rite/;
    let result = favRegex.test(favWord);
    console.log(result);
})();

// Positive and Negative Lookahead
(function() {
    let quit = 'qu';
    let noquit = 'qt';
    let quRegex = /q(?=u)/; // ?= - positive lookahead
    let qRegex = /q(?!u)/; // ?! - negative lookahead
    // it matches q in 'qu' because 'u' exists further in the string
    console.log(quit.match(quRegex)); // [ 'q', index: 0, input: 'qu', groups: undefined ]
    // it matches q in 'qt' because 'u' does not exist further in the string
    console.log(noquit.match(qRegex)); // [ 'q', index: 0, input: 'qt', groups: undefined ]


    let sampleWord = 'astronaut23333';
    // positive lookahead (?=...) - it will match only the word 'astronaut' that has 'u' after 'a'
    let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
    let result = pwRegex.test(sampleWord);
    console.log(result);
})();

// Reuse Patterns Using Capture Groups
(function() {
    let repeatStr = 'regex regex';
    // use parentheses () to find repeated substring
    // it matches only the word 'regex regex' that has 'regex' repeated
    // (\w+) capture group - match any word character one or more times
    // \1 backreference - match the same text as most recently matched by the 1st capturing group
    let repeatRegex = /(\w+)\s\1/; // it is the same as /(\w+)\s(\w+)/
    let result = repeatStr.match(repeatRegex);
    console.log(result); // [ 'regex regex', 'regex', index: 0, input: 'regex regex', groups: undefined ]

    let repeatNum = '42 42 42';
    // it matches only the word '42 42 42' that has '42' repeated
    let reRegex = /^(\d+)\s\1\s\1$/;
    let result2 = repeatNum.match(reRegex);
    console.log(result2);
})();

// Use Capture Groups to Search and Replace
(function() {
    let wrongText = 'The sky is silver.';
    let silverRegex = /silver/;
    wrongText.replace(silverRegex, 'blue'); // 'The sky is blue.'

    'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1'); // 'Camp Code' - access the captured groups in the replacement string using $N

    let huhText = 'This sandwich is good.';
    let fixRegex1 = /good/;
    let replaceText = 'okey-dokey';
    let result1 = huhText.replace(fixRegex1, replaceText);
    console.log(result1);

    let str = 'one two three';
    // use parentheses () to find repeated substring
    // (\w+) capture group - match any word character one or more times
    // \1 backreference - match the same text as most recently matched by the 1st capturing group
    let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
    // it replaces 'one two three' with 'three two one'
    let result = str.replace(fixRegex, '$3 $2 $1');
    console.log(result);
})();

// Remove Whitespace from Start and End
(function() {
    let hello = '   Hello, World!  ';
    let wsRegex = /^\s+|\s+$/g;
    let result = hello.replace(wsRegex, '-');
    console.log(result);
})();