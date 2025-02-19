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

