/**
 * Created by Olegzandr on 11/6/16.
 */


const v = module.exports = function (fn, dataObj) {

  const keys = Object.keys(dataObj);

  var prelim = [
    '(function container(' + keys.join(',') + '){',
    '\n',
    '\treturn ',
    fn.toString(),
    '\n })(' ];



  prelim = prelim.concat(keys.map(function(k){
     return JSON.stringify(dataObj[ k ]);
  }).join(','));


  prelim.push(')');
  const ret = prelim.join('');

  fn.toJSON = function(){
     return ret;
  };

  return fn;
};
