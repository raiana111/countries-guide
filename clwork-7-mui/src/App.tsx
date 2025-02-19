// import { useEffect, useState } from 'react';
// import { IShortCountry } from './types';
// import { BASE_URL } from './constants';
// import CountriesList from "./components/CountriesList/CountriesList";
// import CountryInfo from './components/CountryInfo/CountryInfo';
// import { Container, Typography, Grid } from '@mui/material';
// import "./App.css";


// function App() {
//   const [countries, setCountries] = useState<IShortCountry[]>([]);
//   const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

//   useEffect(() => {
//     const getCountries = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/all?fields=alpha3Code,name`);
//         if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
//         const data: IShortCountry[] = await response.json();
//         setCountries(data);
//       } catch (error) {
//         console.error('Ошибка запроса:', error);
//       }
//     };
//     void getCountries();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Country Information
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <CountriesList countries={countries} onSelect={(code) => setSelectedCountry(code)} />
//         </Grid>
//         <Grid item xs={8}>
//           {selectedCountry ? <CountryInfo shortName={selectedCountry} /> : <Typography>Выберите страну</Typography>}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default App;




import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryInfo/CountryInfo';
import Layout from './components/Layout';
import { fetchCountries, fetchCountryDetails } from './api/countries';
import { IShortCountry, ICountry } from './types';

export default function App() {
  const [countries, setCountries] = useState<IShortCountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    loadCountries();
  }, []);

  const handleSelectCountry = async (code: string) => {
    const data = await fetchCountryDetails(code);
    setSelectedCountry(data);
  };

  return (
    <Layout>
      <CountriesList countries={countries} onSelectCountry={handleSelectCountry} />
      <CountryDetails country={selectedCountry} />
    </Layout>
  );
}

