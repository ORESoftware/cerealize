/**
 * Created by Olegzandr on 11/6/16.
 */


const cerialize = require('.');

function Foo (a, b, c) {

  return cerialize(function bar (d) {

    const ret = a * b * c * d;
    console.log(ret);
    return 'chihuahua';

  }, {

    a: a,
    b: b,
    c: c

  });

}


const cerializedFn = Foo(3,4,5);

// console.log(eval(cerializedFn)(0));


console.log(JSON.stringify(cerializedFn));

