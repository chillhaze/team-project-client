const transformDate = date => {
  const transformDate = new Date(date);

  let dd = String(transformDate.getDate()).padStart(2, '0');
  let mm = String(transformDate.getMonth() + 1).padStart(2, '0');
  let yyyy = String(transformDate.getFullYear());

  const newDate = mm + '/' + dd + '/' + yyyy;
  return newDate;
};

export default transformDate;
