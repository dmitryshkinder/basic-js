const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  const sampleActivityNum = parseFloat(sampleActivity);

  if(typeof(sampleActivity) == 'string' && (sampleActivityNum <= MODERN_ACTIVITY) && (sampleActivityNum > 0)){
      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / k);
  }else{
    return false;
  }
};
 

