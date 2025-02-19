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