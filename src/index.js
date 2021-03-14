
exports.min = function min(minarr){
  if ( minarr === undefined || minarr.length === 0 ){
     return 0  
  } else {
     return Math.min(...minarr)
  }
 
}

exports.max = function max(maxarr){
  if(maxarr === undefined || maxarr.length === 0){
      return 0
  } else {
      return Math.max(...maxarr)
  }
  
};

exports.avg = function avg(avgarr){
  let avg = 0;
  if(avgarr === undefined || avgarr.length === 0){
      return 0
  } else {
    for( let i = 0; i < avgarr.length; i++){
      avg += avgarr[i]
    }
  return avg/avgarr.length;
  }
  
};
