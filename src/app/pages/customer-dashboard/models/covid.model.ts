export class CovidData {
    _id!: string;
    country!: string;
    population!: number;
    date!: string;
    confirmed!: number;
    deaths!: number;
    recovered!: number;
    confirmed_daily!: number;
    deaths_daily!: number;
    recovered_daily!: number;

    constructor(data: any) {
        this.country = data.country;
        this.population= data.population;
        this.date = data.date;
        this.confirmed = data.confirmed_daily;
        this.recovered_daily = data.recovered_daily;
        this.recovered = data.recovered;
        this.deaths_daily = data.deaths_daily;
        this.confirmed_daily = data.confirmed_daily;
        this.deaths = data.deaths;

    }
}