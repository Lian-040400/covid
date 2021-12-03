export class CovidTableData {
    id!: string;
    population!: number;
    confirmed!: number;
    deaths!: number;
    confirmed_daily!: number;
    deaths_daily!: number;
    countryCode: string;
    country_iso2s: string;
    country: string;
    date!: string;
    
    constructor(data: any) {
        this.id = data._id;
        this.confirmed_daily = data.confirmed_daily;
        this.confirmed = data.confirmed;
        this.deaths = data.deaths;
        this.country_iso2s = data.country_iso2s;
        this.deaths_daily = data.deaths_daily;
        this.population = data.population;
        this.countryCode = data.country_code;
        this.country = data.country;
        this.date = data.date

    }
}

export class CountryData {
    id!: string;
    countryCode!: string;
    date!: string;
    confirmed!: number;
    deaths!: number;
    recovered!: number;
    confirmed_daily!: number;
    deaths_daily!: number;
    recovered_daily!: number;
    constructor(data: any) {
        this.id = data.id;
        this.countryCode = data.country_code;
        this.date = data.date;
        this.deaths = data.deaths;
    }
}
