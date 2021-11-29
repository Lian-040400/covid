import { today } from "../app/helpers/formatYesterdaydate";

export const environment = {
  production: false,
  baseUrl:` https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?min_date=${today}T00:00:00.000Z&hide_fields=uids,country_iso2s,country_iso3s,country_codes,combined_names`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
