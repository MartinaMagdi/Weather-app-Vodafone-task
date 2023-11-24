import { Forecast } from "./forecast";

export interface City {
    id: number;
    city: string;
    forcast: Forecast[]
}
