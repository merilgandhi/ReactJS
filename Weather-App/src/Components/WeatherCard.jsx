import { motion } from 'framer-motion';

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const getBackground = (desc) => {
    if (desc.includes('Clear')) return 'from-blue-400 to-blue-600';
    if (desc.includes('Cloud')) return 'from-gray-400 to-gray-600';
    if (desc.includes('Rain')) return 'from-blue-600 to-blue-800';
    if (desc.includes('Snow')) return 'from-blue-200 to-blue-400';
    return 'from-blue-400 to-purple-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`weather-card p-6 max-w-md w-full bg-gradient-to-br ${getBackground(weather.weather[0].description)} text-white shadow-xl`}
    >
      <h2 className="text-2xl font-bold mb-2">
        {weather.name}, {weather.sys.country}
      </h2>
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-5xl font-bold block">
            {Math.round(weather.main.temp)}°C
          </span>
          <p className="text-lg capitalize">
            {weather.weather[0].description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-24 h-24"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white bg-opacity-20 p-3 rounded-lg">
          <p className="text-sm">Feels like</p>
          <p className="text-xl font-semibold">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-3 rounded-lg">
          <p className="text-sm">Humidity</p>
          <p className="text-xl font-semibold">
            {weather.main.humidity}%
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-3 rounded-lg">
          <p className="text-sm">Wind Speed</p>
          <p className="text-xl font-semibold">
            {weather.wind.speed} m/s
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-3 rounded-lg">
          <p className="text-sm">Condition</p>
          <p className="text-xl font-semibold capitalize">
            {weather.weather[0].description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}