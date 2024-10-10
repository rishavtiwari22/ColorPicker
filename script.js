let button = document.querySelectorAll("button");
button.forEach((e) => e.addEventListener("click", (e) => {
    let color = 'ABCDEF1234567890';
    let st = ''
    for (let i = 0; i < 6; i++) {
      st += color[Math.floor(Math.random() * color.length)];
    }
  
    let papaDiv = e.target.parentNode;
    papaDiv.children[0].textContent = `#${st}`;
    papaDiv.style.backgroundColor = `#${st}`;
  })
);


