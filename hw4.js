let array1 = ['','undefined','mahsa','false','NaN','maktab','null', '0', '""','ayazi',2]
function remove (item){
    return item !== 'undefined' && item !== 'NaN'&& item !== '0'&& item !== 'undefined'
 && item !== '' && item !== 'false' && item !== 'null' && item !== '""'
   }
 console.log(array1.filter(remove));
