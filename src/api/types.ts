//These types of data are returned by API so we are defining it before hand
export interface Coordinates {
    lat: number;
    lon: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData {
    coord: Coordinates;
    weather: WeatherCondition[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    name: string;
    dt: number;
}

export interface ForecastData {
    list: Array<{
        dt: number;
        main: WeatherData["main"]; //same structure as WeatherData's main
        weather: WeatherData["weather"];
        wind: WeatherData["wind"];
        dt_txt: string;
    }>;
    city: {
        name: string;
        country: string;
        sunrise: number;
        sunset: number;
    };
}

export interface GeocodingResponse {
    name: string;
    local_names?: Record<string, string>; //optional
    lat: number;
    lon: number;
    country: string;
    state?: string;
}
