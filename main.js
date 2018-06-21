function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(100), ms);
  });
}

delay(1000).then(value => console.log(`Done with  + ${value}`)); // Done with 100

//  ===============================================

const fetch = require('node-fetch');

const url = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const urlUsers = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

function getUserDataPromise() {
  fetch(url, { method: 'GET' })
    .then(res => res.json())
    .then((json) => {
      const { getUsersData } = json;
      if (getUsersData === true) {
        fetch(urlUsers, { method: 'GET' })
          .then(res => res.json())
          .then(jsonUsers => console.log(jsonUsers))
          .catch(e => console.log(e));
      }
    })
    .catch(e => console.log(e));
}

getUserDataPromise();

const getUserDataAsync = async () => {
  try {
    const { getUsersData } = await (await fetch(url, { method: 'GET' })).json();
    if (getUsersData === true) {
      console.log(await (await fetch(urlUsers, { method: 'GET' })).json());
    }
  } catch (e) {
    console.log(e);
  }
};

getUserDataAsync();

//  ===============================================

const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

const reqConsistently = async (arrUrls) => {
  const result = [];
  try {
    for (let i = 0; i < arrUrls.length; i += 1) {
      result.push(await (await fetch(arrUrls[i], { method: 'GET' })).json());
    }
  } catch (e) {
    console.log(e);
  }
  console.log(result);
};

reqConsistently(urls);

const arrPromise = urls.map(someUrl => fetch(someUrl).then(res => res.text()));
Promise.all(arrPromise).then(value => console.log(value));

function Consistently(arrUrls) {
  const results = [];
  let chain = Promise.resolve();

  arrUrls.forEach((someUrl) => {
    chain = chain
      .then(() => fetch(someUrl)
        .then(response => response.json()))
      .then(result => results.push(result));
  });
  chain.then(() => console.log(results));
}

Consistently(urls);

//  ===============================================

function getResolvedPromise(value) {
  return new Promise((resolve) => {
    resolve(value);
  });
}

getResolvedPromise(500)
  .then((value) => {
    if (value > 300) {
      throw new Error('Ошибка');
    }
  })
  .catch(e => console.log(e))
  .finally(() => console.log('This is Finally!'));

