// Sample poverty statistics (random numbers for demonstration)
const povertyStatistics = {
    '2019': 15,
    '2020': 17,
    '2021': 16,
    '2022': 18,
    '2023': 19
  };
  
  // List of European countries
  const europeanCountries = [
    "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina",
    "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland",
    "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
    "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania",
    "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
    "Turkey", "Ukraine", "United Kingdom", "Vatican City"
  ];
  
  // Generate array of objects with country names and poverty statistics
  const EuropeCountriesPovStats = europeanCountries.map(country => {
    const countryPovStats = {
      Country: country,
      Poverty: {} // Empty object for poverty statistics
    };
  
    // Adding sample poverty statistics for each year
    for (const year in povertyStatistics) {
      countryPovStats.Poverty[year] = Math.floor(Math.random() * 20); // Random poverty percentage (0-19)
    }
  
    return countryPovStats;
  });
  
  export default EuropeCountriesPovStats;
  