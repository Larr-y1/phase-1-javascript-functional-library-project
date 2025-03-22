// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}

function myMap(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let value of values) {
        result.push(callback(value));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
        acc = values[0];
        values = values.slice(1);
    }
    for (let value of values) {
        acc = callback(acc, value, collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let value of values) {
        if (predicate(value)) result.push(value);
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions
function myFirst(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
    return n === undefined ? array[array.length - 1] : array.slice(-n);
}

// Bonus Functions
function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        let valA = callback(a), valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    for (let item of array) {
        if (Array.isArray(item)) {
            shallow ? newArr.push(...item) : myFlatten(item, false, newArr);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

// Object Functions
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
