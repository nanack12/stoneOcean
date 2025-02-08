import { AppBar, Toolbar, Typography, Card, CardContent, Grid } from "../node_modules/@mui/material";

const dummyWeatherData = {
  current: {
    temperature: 15,
    feelsLike: 13,
    description: "Cloudy",
  },
  forecast: [
    { day: "Tomorrow", temperature: "18°C / 12°C", description: "Sunny" },
    { day: "Day After Tomorrow", temperature: "20°C / 14°C", description: "Partly Cloudy" },
    { day: "In 3 Days", temperature: "16°C / 11°C", description: "Rainy" },
  ],
  fashionRecommendation: "니트와 목도리, 마스크가 필수인 날씨네용!!><"
};

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">stoneOcean</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ padding: 16 }}>
        {/* Weather Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Current Weather</Typography>
              <Typography variant="body1">Temperature: {dummyWeatherData.current.temperature}°C</Typography>
              <Typography variant="body1">Feels Like: {dummyWeatherData.current.feelsLike}°C</Typography>
              <Typography variant="body2">{dummyWeatherData.current.description}</Typography>
              <Typography variant="h6" style={{ marginTop: 16 }}>3-Day Forecast</Typography>
              {dummyWeatherData.forecast.map((item, index) => (
                <Typography key={index} variant="body2">
                  {item.day}: {item.temperature} - {item.description}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        {/* Fashion Recommendation Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">추천</Typography>
              <Typography variant="body1">{dummyWeatherData.fashionRecommendation}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
