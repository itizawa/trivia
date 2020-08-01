const fromTimeStampToDate = (date = '2020-04-29T12:38:14.571Z') => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = `0${d.getMonth() + 1}`.slice(-2);
  const day = `0${d.getDate()}`.slice(-2);
  const hour = `0${d.getHours()}`.slice(-2);
  const min = `0${d.getMinutes()}`.slice(-2);
  const sec = `0${d.getSeconds()}`.slice(-2);

  return `${year}/${month}/${day} ${hour}:${min}:${sec}`;
};

module.exports = { fromTimeStampToDate };
