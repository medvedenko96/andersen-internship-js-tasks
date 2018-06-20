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
  'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

const getUrlsConsistent = async () => {

};