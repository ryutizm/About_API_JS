// 標準的なAPIの叩き方

// async function callApi() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log(users);
// }

// callApi();



// .thenで繋いでAPIを叩く方法

// function callApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function (users) {
//       console.log(users);
//     })
// }

// callApi();



// fetchを使わずにAPIを叩く方法

function callApi() {
  const xhr =new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function() {
    console.log(xhr.response);
  }
}

callApi();