const transformDate = date => {
  const transformDate = date ? new Date(date) : new Date();

  const dd = String(transformDate.getDate()).padStart(2, '0');
  const mm = String(transformDate.getMonth() + 1).padStart(2, '0');
  const yyyy = String(transformDate.getFullYear());

  const newDate = dd + '.' + mm + '.' + yyyy;
  return newDate;
};

export default transformDate;
