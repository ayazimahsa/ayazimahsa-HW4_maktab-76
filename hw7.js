let curday = function (separator) {
    let today = new Date("11/13/2014");
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return (month + separator + date + separator + year);
};
console.log(curday('/'));
console.log(curday('-'));
