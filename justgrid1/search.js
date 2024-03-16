class DataSearch {
    static searchfoods (input) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
         .then(response => response.json()).then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${input} is not found`);
            }
         })
        }         
    }                                                                 //   


export default DataSearch;