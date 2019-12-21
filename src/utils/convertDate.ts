export const convertDate = (date: string): string => {
  const dateObject = new Date(date);
  const minutes = dateObject.getUTCMinutes();
  return `${dateObject.toLocaleDateString()} ${dateObject.getUTCHours()}:${
    minutes < 10 ? '0' + minutes : minutes
  }`;
};
