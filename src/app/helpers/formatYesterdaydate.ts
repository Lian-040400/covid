export let today: Date | string = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  let dd = String(yesterday.getDate()).padStart(2, "0");
  let mm = String(yesterday.getMonth() + 1).padStart(2, "0");
  let yyyy = yesterday.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;