// url validation
const urlValidate = (value) => {
  return value.match(
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  );
};
// input type file for image
const imageValidate = (file) => {
  return file.name.match(/\.(jpg|jpeg|png|gif)$/);
};

export { urlValidate, imageValidate };
