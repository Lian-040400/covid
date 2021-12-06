export const  legend: boolean = true;
export const showLabels: boolean = true;
export const animations: boolean = true;
export const xAxis: boolean = true;
export const yAxis: boolean = true;
export const showYAxisLabel: boolean = true;
export const showXAxisLabel: boolean = true;
export const xAxisLabel: string = 'Year';
export const yAxisLabel: string = 'Cases';
export const timeline: boolean = true;
export const colorScheme = {
    domain: ['#5AA454', '#7aa3e5', '#E44D25', '#CFC0BB', '#a8385d',]
};
export function onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}

export function onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
}

export function onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}