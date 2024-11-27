import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weatherDashboard";
import CityPage from "./pages/cityPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
    const queryClient = new QueryClient();
    //It keeps track of cached data, data updates(when is refresh needed), how to retry failed requests
    return (
        <QueryClientProvider client={queryClient}>
            {/* Gives all components access to queryClient. */}
            <BrowserRouter>
                <ThemeProvider defaultTheme="dark">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<WeatherDashboard />} />
                            <Route
                                path="/city/:cityName"
                                element={<CityPage />}
                            />
                        </Routes>
                    </Layout>
                </ThemeProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
            {/* developer tool provided by TanStack Query to help you debug and inspect how queries and mutations are managed in your application. */}
        </QueryClientProvider>
    );
}

export default App;
