/*实用杂项函数*/
export function createdAt  ()  {
    const date = new Date();
    return date.toISOString();
}
export function setLocalStorage (key,value){
    window.localStorage.setItem(
        key,
        JSON.stringify(value))
}
export function removeLocalStorage (key){
    window.localStorage.removeItem(key)
}
export function getLocalStorage (key){
    return JSON.parse(window.localStorage.getItem(key));
}
export function pushArrayItemWithDiffKey(newItem, lastList, key) {
    const newList = new Array(newItem);
    for(let item of lastList){
        if(item[key]!==newItem[key])newList.push(item);
    }
    return newList;
}
export function removeArrayItemWithKey(newItem, lastList, key) {
    const newList = [];
    for(let item of lastList){
        if(item[key]!==newItem[key])newList.push(item);
    }
    return newList;
}

//TODO:需要配置装饰器支持
/*装饰器*/
export function logThisFn(target,name,descriptor) {
    console.log('run %s in %o',name,target);
    return descriptor;
}