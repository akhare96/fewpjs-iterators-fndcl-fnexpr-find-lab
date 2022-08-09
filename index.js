
function superBowlWin(array) {
    let search_array = array.find(record => record.result === "W")
    if (!!search_array) {
        return search_array.year
    }
}