import { API_CONFIG } from "./config";
import {
    Coordinates,
    GeocodingResponse,
    WeatherData,
    ForecastData,
} from "./types";

class WeatherAPI {
    //dynamically build URLs for different API endpoints by combining the base URL, endpoint, and any parameters required for the request.
    private createUrl(
        endpoint: string,
        //You are passing the parameters as an object: { q: "London", units: "metric" }.
        params: Record<string, string | number> //object with string key and value as string/number
    ) {
        //searchParams stores the query parameters (key-value pairs) separately in an internal structured format
        const searchParams = new URLSearchParams({
            //It simplifies the process of working with the query string, which is the part of a URL that contains parameters
            appid: API_CONFIG.API_KEY,
            ...params, // Spread the passed parameters into the query string
        });
        return `${endpoint}?${searchParams.toString()}`;
    }
    private async fetchData<T>(url: string): Promise<T> {
        //<T>: This is the generic type parameter. It tells TypeScript that the function fetchData will return a value of some generic type T
        //Promise<T>: This means the function will return a Promise that resolves to a value of type T. The T is not fixed—it will be determined by what type the caller expects from the function when they use it.
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Weather API Error: ${response.statusText}`);
        }
        return response.json();
    }
    async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });
        return this.fetchData<WeatherData>(url);
    }
    async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });
        return this.fetchData<ForecastData>(url);
    }
    async reverseGeocode({
        lat,
        lon,
    }: Coordinates): Promise<GeocodingResponse[]> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/reverse`, {
            lat: lat.toString(),
            lon: lon.toString(),
            limit: 1, //first object
        });
        return this.fetchData<GeocodingResponse[]>(url);
    }
}

export const weatherAPI = new WeatherAPI();
