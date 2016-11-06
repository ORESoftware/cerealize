/**
 * Created by Olegzandr on 11/6/16.
 */


function outerOuter () {

  return (function outer (foo, bar, baz) {     // foo, bar, and baz are injected JSON strings

    return function yourSerializedFunction () {

      //foo, bar, and baz are available here, but you need to call JSON.parse on them

    }

  })(
    '{"foo":"is-serialized"}',
    '{"bar":"is-serialized"}',
    '{"baz":"is-serialized"}'
  );

}

console.log(outerOuter.toString());

const v = module.exports = function (dataInArrayForm, fn) {

  const newDate = dataInArrayForm.map(d => JSON.stringify(d));

  const prelim = [
    '(function container(d,e,f){',
    '  \n\n return ',
    fn.toString(),
    '\n })(' ];

  newDate.forEach(function (d, i) {
    if (i > 0) {
      prelim.push(',' + d);
    }
    else {
      prelim.push(d);
    }

  });

  prelim.push(')');

  return prelim.join('');

};

console.log(eval(v([ 1, 2, 3 ], function () {

  console.log(d * 2, e, f);

}))());