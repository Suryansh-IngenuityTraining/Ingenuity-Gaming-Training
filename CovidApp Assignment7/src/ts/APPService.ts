import {TCovidData} from './types/CovidData'
export class APIService{
    private readonly INFO_DATA = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
    private readonly NEWS_COVID = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0";
    private readonly INFO_VACCINE = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines";
    private readonly headers = new Headers({
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": "12588894bbmshb60963dfbcbb58bp1f9a63jsn14ba8437af08"
	})
    private readonly method = "GET";
    public getCovidData(): Promise<TCovidData[]>{
        return this.getData(this.INFO_DATA);
    }
    public getCovidNews(): Promise<any> {
        return this.getData(this.NEWS_COVID);
    }
    public getVaccineData(): Promise<any> {
            return this.getData(this.INFO_VACCINE);
        }
    protected async getData(url: string): Promise<any>{
        const response = await fetch(url, {
            method:   this.method,
            headers:  this.headers,
        })
        return response.json();
    }
}