let month_name = function (dt) {
  mylist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return mylist[dt.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));