const request = require('request');

const breedName = process.argv[2];

if (!breedName) {
  console.log('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`Breed '${breedName}' not found.`);
    return;
  }

  const breedInfo = data[0];
  console.log(breedInfo.description);
});