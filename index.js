function getSearchResultsFromStringArray(mainArray, searchItems) {
  let filteredArray = mainArray.filter((item) => {
    return item.toLocaleLowerCase().includes(searchItems.toLocaleLowerCase());
  });
  return filteredArray.length ? filteredArray : ["No Result Found"];
}

function highlightSearchResultsFromStringArray(mainArray, searchItems) {
  let answer = getSearchResultsFromStringArray(mainArray, searchItems);
  let filteredArray = `${answer}` === "No Result Found" ? [] : answer;
  const regex = new RegExp(searchItems, "ig");
  filteredArray = filteredArray.map((item) => {
    return item.replace(regex, (match) => {
      return `<mark>${match}</mark>`;
    });
  });
  return filteredArray.length ? filteredArray : ["No Result Found"];
}

function getResultsObjectArrayAllFields(mainArray, searchItem) {
  const fields = Object.keys(mainArray[0]);
  const filteredArray = mainArray.filter((country) => {
    let willInclude = true;
    for (let key of fields) {
      if (country[key]?.toLowerCase().includes(searchItem.toLowerCase())) {
        willInclude = true;
        break;
      } else {
        willInclude = false;
      }
    }
    return willInclude;
  });
  return filteredArray.length ? filteredArray : ["No Result Found"];
}
function getHighlightedResultsObjectArrayAllFields(mainArray, searchItem) {
  const fields = Object.keys(mainArray[0]);
  const regex = new RegExp(searchItem, "ig");
  let answer = getResultsObjectArrayAllFields(mainArray, searchItem);
  let filteredArray = `${answer}` === "No Result Found" ? [] : [...answer];
  filteredArray = filteredArray.map((country) => {
    let countryCopy = { ...country };
    for (let key of fields) {
      if (countryCopy[key]?.toLowerCase().includes(searchItem.toLowerCase())) {
        countryCopy[key] = countryCopy[key].replace(regex, (match) => {
          return `<mark>${match}</mark>`;
        });
      }
    }
    return countryCopy;
  });
  console.log(filteredArray);
  return filteredArray.length ? filteredArray : ["No Result Found"];
}

function getResultsObjectArraySomeFields(mainArray, searchItem, ...fields) {
  const filteredArray = mainArray.filter((country) => {
    let willInclude = true;
    for (let key of fields) {
      if (country[key]?.toLowerCase().includes(searchItem.toLowerCase())) {
        willInclude = true;
        break;
      } else {
        willInclude = false;
      }
    }
    return willInclude;
  });
  return filteredArray.length ? filteredArray : ["No Result Found"];
}
function getHighlightedResultsObjectArraySomeFields(
  mainArray,
  searchItem,
  ...fields
) {
  const regex = new RegExp(searchItem, "ig");
  let answer = getResultsObjectArraySomeFields(
    mainArray,
    searchItem,
    ...fields
  );
  let filteredArray = `${answer}` === "No Result Found" ? [] : [...answer];
  filteredArray = filteredArray.map((country) => {
    let countryCopy = { ...country };
    for (let key of fields) {
      if (countryCopy[key]?.toLowerCase().includes(searchItem.toLowerCase())) {
        countryCopy[key] = countryCopy[key].replace(regex, (match) => {
          return `<mark>${match}</mark>`;
        });
      }
    }
    return countryCopy;
  });
  console.log(filteredArray);
  return filteredArray.length ? filteredArray : ["No Result Found"];
}

module.exports = {
  getSearchResultsFromStringArray,
  highlightSearchResultsFromStringArray,
  getResultsObjectArrayAllFields,
  getHighlightedResultsObjectArrayAllFields,
  getResultsObjectArraySomeFields,
  getHighlightedResultsObjectArraySomeFields,
};
