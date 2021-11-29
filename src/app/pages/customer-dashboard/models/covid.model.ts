export class CovidTableData {
    id!: string;
    country!: string;
    population!: number;
    confirmed!: number;
    deaths!: number;
    recovered!: number;
    confirmed_daily!: number;
    deaths_daily!: number;
    recovered_daily!: number;
    countryCode: string;

    constructor(data: any) {
        this.id = data.id;
        this.country = data.country;
        this.confirmed_daily = data.confirmed_daily;
        this.confirmed = data.confirmed;
        this.deaths = data.deaths;
        this.deaths_daily = data.deaths_daily;
        this.population = data.population;
        this.countryCode = data.country_code;
    }
}

export class CountryData {
    id!: string;
    country!: string;
    date!: string;
    confirmed!: number;
    deaths!: number;
    recovered!: number;
    confirmed_daily!: number;
    deaths_daily!: number;
    recovered_daily!: number;
    constructor(data: any) {
        this.id = data.id;
        this.country = data.country;
        this.date = data.date;
        this.deaths = data.deaths;
    }
}

