Moralis.initialize('4iezTaZ5edEHwcAYpuD9lCXcKJt3vUR8YdUJgsBH'); // Application id from moralis.io
Moralis.serverURL = 'https://6achco4k6mvv.moralis.io:2053/server'; //Server url from moralis.io

async function login() {
  try {
    user = await Moralis.User.current();
    if (!user) {
      user = await Moralis.Web3.authenticate();
    }

    console.log(user);
    alert('User logged in');
    document.getElementById('login_button').style.display = 'none';
    document.getElementById('game').style.display = 'block';
  } catch (error) {
    console.log(error);
  }
}

async function flip(side) {
  alert(side);
}

document.getElementById('login_button').onclick = login;
document.getElementById('heads_button').onclick = function () {
  flip('heads');
};
document.getElementById('tails_button').onclick = function () {
  flip('tails');
};
