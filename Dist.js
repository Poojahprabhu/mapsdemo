async function getDist(address1, address2) {
    const apiKey = 'w5XckH8qUhTKqkdLbfS7QEIcado9J';
    const apiUrl = `https://api.distancematrix.ai/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(address1)}&destinations=${encodeURIComponent(address2)}&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const distanceinkms = data.rows[0].elements[0].distance.text;
  
    return distanceinkms;
  }
  
  var dist = getDist("Davangere Karnataka", "Banglore Karnataka")
    .then((dist) => {
      console.log(dist);
    })
    .catch((err) => {
      console.error(err);
    });
  