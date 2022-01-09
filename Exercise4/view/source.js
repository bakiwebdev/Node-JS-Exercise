const imageAPI = "/image";
const img = document.createElement("img");
img.width = "500";
img.height = "500";
img.style = "display: block; margin: auto; backgroundColor:'#fff';";

const getRandomImageUrl = () => {
  fetch(imageAPI)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.image);
      img.src = data.image;
    })
    .catch((err) => {
      console.log(err);
    });
};

const button = document.createElement("button");
button.innerText = "NEXT ->";
button.onclick = () => {
  getRandomImageUrl();
};

window.onload = () => {
  getRandomImageUrl();
  document.body.appendChild(img);
  document.body.appendChild(button);
};

// const url = "localhost:4000/"

// const button = document.createElement('button');
// button.innerText = "Next";

// const img = document.createElement('img')
// img.width = "500px"

// function fetchFromLocalHost() {
//     fetch(url).then(res => {
//         return res.json();
//     })
//     .then(res => {
//         img.src = res.image
//         document.body.appendChild(img);
//         document.body.appendChild(button);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// button.addEventListener('click', () => {
//     fetchFromLocalHost();
// })

// test
// window.onload = () => {
//     document.querySelector('p').style.color = "green";
// }
