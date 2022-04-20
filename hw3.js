function uppercase(string) {
    let array = string.split(' ');
    let newarray = [];

    for (let i = 0; i < array.length; i++) {
        newarray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return newarray.join(' ');
}
console.log(uppercase("the quick brown fox"));