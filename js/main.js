const data = fetch("https://front-end-by-rimantas.github.io/44-grupe-portfolio/css/components/services.css"
)
  .then((Response) => {
    return Response.text();
  })
  .then((data) => {
    for (const user of data) {
      console.log(user);
    }
  });
console.log(data);
