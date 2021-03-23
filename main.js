Moralis.initialize('4iezTaZ5edEHwcAYpuD9lCXcKJt3vUR8YdUJgsBH'); // Application id from moralis.io
Moralis.serverURL = 'https://6achco4k6mvv.moralis.io:2053/server'; //Server url from moralis.io

async function login() {
  try {
    user = await Moralis.Web3.authenticate();
    console.log(user);
    alert('User logged in');
  } catch (error) {
    console.log(error);
  }
}

document.getElementById('login_button').onclick = login;
