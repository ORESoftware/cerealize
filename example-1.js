
const v = require('.');

function n (d,e,f){

  const z = v(function () {

      console.log(d * 2, e, f);
      return null;

    },
    {
      d: 1,
      e: 2,
      f: 3
    });

  console.log('\n\n');
  console.log(z.toString());
  console.log('\n\n');
  console.log(z());
  console.log('\n\n');
  console.log(eval(z.toJSON())());


}

n(0,0,0);