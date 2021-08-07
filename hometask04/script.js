function makeGaussDistr() { 
  let u = 0;
  let v = 0; 
  while (u === 0) u = Math.random(); 
  while (v === 0) v = Math.random(); 
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};

function generateGaussSheet() {
  const result = {};
  const arr = [];

  for(let i = 0; i < 10; i++) {
    arr.push(makeGaussDistr());
  }

  arr.map(x => (x in result) ? (result[x] += 1) : (result[x] = 1));


}

generateGaussSheet();