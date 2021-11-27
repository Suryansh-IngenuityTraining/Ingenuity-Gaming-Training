import {TCovidData} from './types/CovidData';
import {TCovidNews} from './types/CovidNews';
import {TCovidVacc} from './types/CovidVacc';
export class APIService{
    COV_DATA = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/";
    TREATMENT_DATA = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/";
    VACCINE_DATA = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/";
    headers = new Headers({
        "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": "12588894bbmshb60963dfbcbb58bp1f9a63jsn14ba8437af08"
	})
    private readonly method = "GET";
    public getCovidData(): Promise<TCovidData[]>{
        return this.getData(this.COV_DATA);
    }
    public getCovidNews(): Promise<TCovidNews[]> {                          
        return this.getData(this.TREATMENT_DATA);
    }
    public getVaccineData(): Promise<TCovidVacc[]> {
        return this.getData(this.VACCINE_DATA);
    }
    protected async getData(url: string): Promise<any>{
        const response = await fetch(url, {
            method:   this.method,
            headers:  this.headers,
        })
        return response.json();
    }
}
