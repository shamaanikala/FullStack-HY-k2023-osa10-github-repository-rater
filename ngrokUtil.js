const axios = require('axios');
const { writeFile, open } = require('fs/promises');


const NGROK_URL_VAR = 'NGROK_URL';

/**
 * Makes an axios.get request to http://127.0.0.1:4040/api/tunnels
 * to find the local running NGRONK instance and parses the 
 * response.data.tunnels array to find value of 'public_url'
 * from tunnel which uses the 'proto' = 'https.
 * If the request fails the local running NGRONK instance
 * probably does not exist.
 * 
 * @returns string The url of a running NGRONK http tunnel.
 */
const getNGROKurl = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:4040/api/tunnels');
    // url is found data.tunnels[].public_url
    console.log(response.data.tunnels.find(t => t.proto === 'https').public_url);
    return response.data.tunnels.find(t => t.proto === 'https').public_url;
  } catch(error) {
    if (error.code === 'ECONNREFUSED') {
      console.error('Unable to connect ngrok server api!');
      console.error(error.message);
      console.log('Is ngrok server running?');
    } else {
      console.error(error);
    }
  }
};

const writeUrl = async (filename) => {
  const url = await getNGROKurl();
  const file = await open(filename);
  let data = []; // skip the NGROK_URL
  for await (const line of file.readLines()) {
    if (line.startsWith('NGROK_URL')) {
      continue;
    }
    data.push(line);
  }
  if (!url) {
    // throw new Error('No ngrok url to write!');
    console.log('No ngrok url to write!');
    return;
  }
  data.push(`${NGROK_URL_VAR}=${url}`);
  try {
    await writeFile(filename,data);
  } catch (err) {
    // throw new Error(`Writing file ${filename} failed: ${err.message}`);
    console.error(`Writing file ${filename} failed: ${err.message}`);
  }
};

const run = async () => await writeUrl('.env');

run();

module.exports = { run };