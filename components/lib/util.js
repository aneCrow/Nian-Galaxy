export function createdAt  ()  {
    const date = new Date();
    return date.toISOString();
}
export function setLocalStorage (key,value){
    window.localStorage.setItem(
        key,
        JSON.stringify(value))
}
export function getLocalStorage (key){
    return JSON.parse(window.localStorage.getItem(key));
}
export function pushItemWithDiffKey(newItem, lastList, key) {
    const newList = new Array(newItem);
    for(let item of lastList){
        if(item[key]!==newItem[key])newList.push(item);
    }
    return newList;
}