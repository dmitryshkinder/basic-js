module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    result = [];

    members.forEach( (item) => {
      if (typeof(item) != 'string') return false;
      
      item = item.trim();
      result.push(item[0].toUpperCase());
    });

    return result.sort().join('');
  }else{
    return false;
  }
};