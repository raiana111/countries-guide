export const fetchCountries = async (): Promise<IShortCountry[]> => {
    try {
      const response = await fetch('https://restcountries.com/v2/all?fields=name,alpha3Code');
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Ошибка запроса:', error);
      return [];
    }
  };
  
  export const fetchCountryDetails = async (code: string): Promise<ICountry | null> => {
    try {
      const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Ошибка запроса:', error);
      return null;
    }
  };
  