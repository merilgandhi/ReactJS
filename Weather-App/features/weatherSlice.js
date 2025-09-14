import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_API_KEY || 'demo';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      // For demo purposes without API key
      if (!import.meta.env.VITE_API_KEY) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for demonstration
        const mockData = {
          name: city,
          main: { 
            temp: Math.round(Math.random() * 30 + 5), 
            feels_like: Math.round(Math.random() * 30 + 5), 
            humidity: Math.round(Math.random() * 50 + 30) 
          },
          weather: [{ 
            description: ['Clear', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)], 
            icon: `0${Math.floor(Math.random() * 4) + 1}d` 
          }],
          wind: { speed: Math.round(Math.random() * 20 + 1) },
          sys: { country: ['US', 'UK', 'DE', 'FR'][Math.floor(Math.random() * 4)] }
        };
        return mockData;
      }

      const response = await fetch(
        `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) throw new Error('City not found');
      
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
  lastSearched: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastSearched = action.payload.name;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export const { clearError } = weatherSlice.actions;
export default weatherSlice.reducer;