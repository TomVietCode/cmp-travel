fetch('https://mock-every-sunday-server.onrender.com/testimonials')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));
