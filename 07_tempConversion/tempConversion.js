const ftoc = function(cel) {
  return Math.round(((cel-32)*5/9)*10)/10
};

const ctof = function(far) {
  return Math.round(((far*9/5)+32)*10)/10

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
