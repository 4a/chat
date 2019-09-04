function randomItem(list) {
    return list[(Math.random() * list.length) | 0];
}

function randomInterval(maxSeconds) {
    return randomItem(range(1, maxSeconds).map(x => x * 1000));
}

function range(floor, count) {
    return [...Array(count).keys()].map(x => x + floor);
}

function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export { randomItem, randomInterval, range, uuidv4 };
