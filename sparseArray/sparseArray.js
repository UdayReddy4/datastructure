function matchingStrings(stringList, queries) {
    if(stringList.length===0 ||queries.length===0){
        return"Error : The stringList or queries INPUT is Wrong";
    }

    const occurrencesMap = {};
    for (const string of stringList) {
        if (occurrencesMap[string] === undefined) {
            occurrencesMap[string] = 1;
        } else {
            occurrencesMap[string]++;
        }
    }

    const result = Array(queries.length).fill(0);

    for (let i =0; i < queries.length; i++) {
        const query = queries[i];
        if (occurrencesMap[query] !== undefined) {
            result[i] = occurrencesMap[query];
        }
    }

    return result;
}
//console.log(matchingStrings((['def', 'de', 'fgh']), (['de', 'lmn', 'fgh'])));
module.exports=matchingStrings;