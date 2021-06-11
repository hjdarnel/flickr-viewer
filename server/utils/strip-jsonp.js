module.exports.stripJsonp = (input, callback) => {
  var STRIP_REGEX = /^.*\(/g;
  var END_REGEX = /\)$/g;
  var output;

  if (callback != null) {
    output = input.replace(callback, '');
    output = output.slice(1, output.length - 1);
  } else {
    output = input.replace(STRIP_REGEX, '');
    output = output.replace(END_REGEX, '');
  }

  return output;
};
