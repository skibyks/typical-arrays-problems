
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
  if(avgarr === undefined || avgarr.length === 0){
      return 0
  } else {
     return avgarr.length/2 
  }
  
};
