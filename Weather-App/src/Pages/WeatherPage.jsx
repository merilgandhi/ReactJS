import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, clearError } from '../features/weather/weatherSlice';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../Components/WeatherCard';
import Loader from '../Components/Loader';
import ErrorMessage from '../Components/ErrorMessage';

export default function WeatherPage() {
  const dispatch = useDispatch();
  const { data, loading, error, lastSearched } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    const city = lastSearched || 'London';
    dispatch(fetchWeather(city));
  }, [dispatch]);

  const handleSearch = (city) => {
    dispatch(fetchWeather(city));
  };

  const handleDismissError = () => {
    dispatch(clearError());
  };

  return (
    <div className="min-h-screen py-8 px-4 flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Weather Forecast
      </motion.h1>

      <SearchBar onSearch={handleSearch} loading={loading} />
      
      {error && (
        <ErrorMessage 
          message={error} 
          onDismiss={handleDismissError} 
        />
      )}
      
      {loading && <Loader />}
      
      {data && !loading && <WeatherCard weather={data} />}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-gray-600 text-sm"
      >
        {!import.meta.env.VITE_API_KEY && (
          <p>Using demo data. Add your OpenWeatherMap API key for real data.</p>
        )}
        <p>Search for any city to get current weather information.</p>
      </motion.div>
    </div>
  );
}