export const compareDates = (startDate, endDate) => {
  console.log(startDate, endDate);
  console.log(
    `startDate : ${new Date(startDate).getTime()}\nendDate : ${new Date(
      endDate
    ).getTime()}`
  );
  if (new Date(startDate) < new Date(endDate)) {
    return true;
  } else {
    return false;
  }
};

export const checkFormErrors = (formObject) => {
  let errorExists = true;
  Object.keys(formObject).forEach((field) => {
    if (formObject[field].required && formObject[field].empty) {
      errorExists = false;
    }

    if (formObject[field].invalid && formObject[field].invalid === true) {
      errorExists = false;
    }

  });
  return errorExists;
};

export const extractFormBody = (formObject) => {
  let formBody = {};
  Object.keys(formObject).forEach((field) => {
    formBody[field] = formObject[field].value;
  });
  return formBody;
};
