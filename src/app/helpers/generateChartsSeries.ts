export function generateSeries(actionType: string, list: any[]) {
    const series = [];
    for (const item of list) {
      const date = new Date(item.date)
      if (date.getDate() === 1) {
        if(actionType === "total-deaths"){
          series.push({name: date.toDateString(), value: item.deaths});
        }
        else if(actionType === "deaths-daily"){
          series.push({name: date.toDateString(), value: item.deaths_daily});
        }
        else if(actionType === "total-confirmed"){
        series.push({name: date.toDateString(), value: item.confirmed});
      }
      else if(actionType === "confirmed-daily"){
        series.push({name: date.toDateString(), value: item.confirmed_daily});
      }
      }
    }
    return {
      name: actionType,
      series: series
    }
  }