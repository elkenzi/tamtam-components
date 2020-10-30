export const getDateLabel = (date) => {
  const d = new Date(date);

  const result = d.toDateString().split(" ");

  const hours =
    parseInt(d.getHours(), 10) < 10 ? "0" + d.getHours() : d.getHours();
  const minutes =
    parseInt(d.getMinutes(), 10) < 10 ? "0" + d.getMinutes() : d.getMinutes();

  return (
    result[2] +
    " " +
    result[1] +
    " " +
    result[3] +
    ", at " +
    hours +
    ":" +
    minutes
  );
};
