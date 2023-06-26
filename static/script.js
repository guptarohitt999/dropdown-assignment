
//getWorldTotal function automatically call and load all the countries data...
const getWorldTotal = async () => {
  const response = await fetch('https://d32sbion19muhj.cloudfront.net/pub/interview/countries');
  const myJson = await response.json();
  console.log(myJson);
  var b = myJson["data"];
  const countryDropdown = document.getElementById('countryDropdown');
   const stateDropdown = document.getElementById('stateDropdown');
  stateDropdown.innerHTML = '<option value="">Select State</option>';
  const cityDropdown = document.getElementById('cityDropdown');
  cityDropdown.innerHTML = '<option value="">Select State</option>';
  for (var i = 0; i < b.length; i++) { 
    
    const option = document.createElement('option');
  option.value = b[i].id;
  option.text = b[i].name;
  countryDropdown.appendChild(option);
}
}
getWorldTotal();

//change the states data when country is selected by using updateStates function...
const updateStates = async (selectedCountryId) => {
  const response = await fetch('https://d32sbion19muhj.cloudfront.net/pub/interview/states');
  const myJson = await response.json();
  var b = myJson["data"];
  const stateDropdown = document.getElementById('stateDropdown');
  stateDropdown.innerHTML = '<option value="">Select State</option>';
  const cityDropdown = document.getElementById('cityDropdown');
  cityDropdown.innerHTML = '<option value="">Select State</option>';
 
  for (var i = 0; i < b.length; i++) { 
    console.log(b[i].country_id);
    if (b[i].country_id == selectedCountryId.value)
    {
      const option = document.createElement('option');
      option.value = b[i].id;
      option.text = b[i].name;
      stateDropdown.appendChild(option);
      
    }  
}
}

//change the Cities data when country and state is selected by using updateCities function...
const updateCities = async (selectedStateId) => {
  const response = await fetch('https://d32sbion19muhj.cloudfront.net/pub/interview/cities');
  const myJson = await response.json();
  var b = myJson["data"];
  const cityDropdown = document.getElementById('cityDropdown');
   cityDropdown.innerHTML = '<option value="">Select State</option>';
  for (var i = 0; i < b.length; i++) { 
    console.log(b[i].state_id);
    if (b[i].state_id == selectedStateId.value)
    {
      const option = document.createElement('option');
      option.value = b[i].id;
      option.text = b[i].name;
      cityDropdown.appendChild(option);
      
    }  
}
}
