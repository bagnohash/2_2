(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const body = document.body;

  const popup = document.createElement('div');
  popup.innerHTML = "Loading...";
  popup.classList.add('popup');

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO
  })

  cw2.addEventListener("click", async function () {
    body.appendChild(popup);
    //add timeout
    setTimeout(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        console.log(json[0]);

        let result = "<table class='post'><tr><th>Tytuł</th><th>Treść</th></tr>";
        json.map(post => {
            result += `<tr><td class='post-title'>${post.title}:</td><td class='post-body'>${post.body}</td></tr>`;
        })
        result += "</table>";
        popup.remove();
        answer.innerHTML = result;
    }, 1000);
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
