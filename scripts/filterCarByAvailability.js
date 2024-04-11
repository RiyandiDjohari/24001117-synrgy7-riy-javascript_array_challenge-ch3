function filterCarByAvailability(cars) {
  // Tempat penampungan hasil
  const result = [];
  
  for ( let i = 0; i < cars.length ; i++ ) {
    if(cars[i].available === true) {
      result.push(cars[i]);
    }
  }
  
  console.log(result);

  return result;
}