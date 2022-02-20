# search-input

### Brief

suppose you have an array for strings or array of objects and you want to implement some kind of search functionality where fir array of strings you will just take value from user and check if any string from that array contain it or not or for array of objects you want to check if all the values or some specific values contains the user input data, and then show the data to the user (With some design) but the thing is you will need some kind of functionality which will do the checking for you and this package do exactly what you want.

one Important thing is you can also **HIGHLIGHT** your searched area with this package

---

#### Import Statements

# ES6

```javascript
import {
  getHighlightedResultsObjectArraySomeFields,
  getResultsObjectArraySomeFields,
  getSearchResultsFromStringArray,
  highlightSearchResultsFromStringArray,
  getHighlightedResultsObjectArrayAllFields,
  getResultsObjectArrayAllFields,
} from "@hyvip-ai/search-input";
```

# With Require

```javascript
const searchInput = require("@hyvip-ai/search-input");
//use The Functions Like This
searchInput.getSearchResultsFromStringArray(args);
//or you can destructure
const { getSearchResultsFromStringArray } = require("search-input");
```

---

## How to use

#### Search Array of String

```javascript
//string related operation
import {
  getSearchResultsFromStringArray,
  highlightSearchResultsFromStringArray,
} from "@hyvip-ai/search-input";
//two arguments first one is your main array second one is a string you need to search for
let stringFilteredArray = getSearchResultsFromStringArray(
  stringArray,
  searchData
);
//after calling the function it will return an array which you can use later to display
//Highlight the search
//two arguments first one is your main array second one is a string you need to search for
let stringFilteredHighlightArray = highlightSearchResultsFromStringArray(
  stringArray,
  searchData
);
//it will also return an array bu the only difference is the array element will contain some html tags so you need to set it as innerhtml
```

---

#### Search Array of Objects With All Keys

```javascript
//Object related operation
import {
  getHighlightedResultsObjectArrayAllFields,
  getResultsObjectArrayAllFields,
} from "@hyvip-ai/search-input";
//two arguments first one is your main array second one is a string you need to search for
let objectFilteredArray = getResultsObjectArrayAllFields(
  objectArray,
  searchData
);
//after calling the function it will return an array which you can use later to display
//Highlight the search
//two arguments first one is your main array second one is a string you need to search for
let objectFilteredHighlightArray = getHighlightedResultsObjectArrayAllFields(
  objectArray,
  searchData
);
//it will also return an array bu the only difference is the array element will contain some html tags so you need to set it as innerhtml
```

---

#### search Array of Objects With Some Keys

```javascript
//object related operation
import {
  getHighlightedResultsObjectArraySomeFields,
  getResultsObjectArraySomeFields,
} from "@hyvip-ai/search-input";
//any number arguments are allowed first one is your main array second one is a string you need to search for and after that you have to give the key names you want search
/* if an object in an array is 
{
    capital: "Kabul"
    demonym: "Afghan"
    name: "Afghanistan"
    region: "Asia"
    subregion: "Southern Asia"
}
*/
let objectFilteredArray = getResultsObjectArraySomeFields(
  objectArray,
  searchData,
  "capital",
  "demonym"
);
//after calling the function it will return an array which you can use later to display
//Highlight the search
let objectFilteredHighlightArray = getHighlightedResultsObjectArraySomeFields(
  objectArray,
  searchData,
  "capital",
  "demonym"
);
//it will also return an array bu the only difference is the array element will contain some html tags so you need to set it as innerhtml
```

### Search Array with Debounce

```javascript
import {
  highlightSearchResultsFromStringArray,
  useDebounce
} from "@hyvip-ai/search-input";

  let answerArray = []; //array to store results
  // useDebounce function takes two parameters first one is the main function and the second one is the duration between two key press, if two key is not pressed within that delay then only it will search other wise not.
  let debouncedFunction = useDebounce(
    highlightSearchResultsFromStringArray, //main function
    1000 // delay in milliseconds
  );

  //now calling the function returned upon calling useDebounce with the same arguments as shown in previous example
  //debouncedFunction returns an array which will only resolved upon getting some search value as far now there is no use of catch here but it may change in future.
  debouncedFunction(stringArray, searchItem).then((data) => {
    //storing the data
    answerArray = data;
  });
---

> This package is still under development and will be released with new and improved functions , if you find any problems whule using this or if you have any new ideas for integration please feel free to reach out @rm2932002@gmail.com or in [LinkedIn](https://www.linkedin.com/in/rajat-mondal-a7abb8199/)
```
