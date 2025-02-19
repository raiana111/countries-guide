// import { useEffect, useState } from "react";
// import { BASE_URL } from "../../constants";
// import { IFullCountry } from "../../types";

// interface Props {
//   shortName: string | null;
// }

// const CountryInfo = ({ shortName }: Props) => {
//   const [country, setCountry] = useState<IFullCountry | null>(null);

//   useEffect(() => {
//     const getCountry = async (code: string) => {
//       try {
//         const response = await fetch(`${BASE_URL}/alpha/${code}`);
//         if (!response.ok) {
//           throw new Error(`Ошибка: ${response.status}`);
//         }
//         const data: IFullCountry = await response.json();
//         setCountry(data);
//       } catch (error) {
//         console.error("Ошибка запроса:", error);
//       }
//     };

//     if (shortName) {
//       getCountry(shortName);
//     }
//   }, [shortName]);

//   if (!country) return <div>Выберите страну</div>;

//   return (
//     <div>
//       <h1>{country.name}</h1>
//       <p><strong>Столица:</strong> {country.capital}</p>
//       <p><strong>Население:</strong> {country.population.toLocaleString()}</p>
//       <p><strong>Регион:</strong> {country.region}</p>
//       <img src={country.flag} alt={`Флаг ${country.name}`} width="100" />
//     </div>
//   );
// };

// export default CountryInfo;




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  country: {
    name: string;
    capital: string;
    population: number;
    borders?: string[];
    flag: string;
  };
}

export default function CountryDetails({ country }: Props) {
  if (!country) {
    return <Typography variant="h6">Выберите страну</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 6, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 500, padding: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>{country.name}</Typography>
          <img src={country.flag} alt="flag" width={300} style={{ marginBottom: "16px" }} />
          <Typography>Столица: {country.capital}</Typography>
          <Typography>Население: {country.population.toLocaleString()}</Typography>
          <Typography>
            Границы: {country.borders && country.borders.length > 0 ? country.borders.join(", ") : "Нет"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}