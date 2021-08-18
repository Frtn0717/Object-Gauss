// variable declaration
const btnArr = document.getElementById('btn_array');
const resultArray = document.getElementById('res_arr');
const btnRes = document.getElementById('btn_res_tab');
const table = document.getElementById('res_tab');

// generate random number by Gaussian distribution
function makeGaussDistr() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}

// generate array with random numbers
function generateArrWithRandomsN() {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(makeGaussDistr());
  }

  return arr;
}

// generate object with count each element of array
function generateObjectByArray(arr) {
  const result = {};

  arr.map((x) => (x in result ? (result[x] += 1) : (result[x] = 1)));

  return result;
}

// show our array with Gaussian distribution in the input
btnArr.addEventListener('click', () => {
  resultArray.value = generateArrWithRandomsN();
  resultArray.classList.remove('hidden');
  btnRes.classList.remove('hidden');
  table.classList.add('hidden');
});

// show resulting table with our key-values
btnRes.addEventListener('click', () => {
  const arr = resultArray.value.split(',');
  const obj = generateObjectByArray(arr);
  const sortedKeys = Object.keys(generateObjectByArray(arr)).sort(
    (prev, curr) => prev - curr
  );
  const length = Object.keys(obj).length;  
  const tbody = document.getElementsByTagName('tbody')[0];

  if (tbody.hasChildNodes()) {
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  table.classList.remove('hidden');

  for (let i = 0; i < length; i++) {
    const newRow = document.createElement('tr');
    const newNumCol = document.createElement('td');
    const newCountCol = document.createElement('td');
    const value = obj[sortedKeys[i]];

    newNumCol.appendChild(document.createTextNode(`${sortedKeys[i]}`));
    newNumCol.style.textAlign = 'center';
    newCountCol.appendChild(document.createTextNode(`${value}`));
    newCountCol.style.textAlign = 'center';

    newRow.appendChild(newNumCol);
    newRow.appendChild(newCountCol);

    tbody.appendChild(newRow);
  }
});
