export const isValidUrl = (value: string): boolean => {
  var pattern = new RegExp(
    '^((ft|htt)ps?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?' +
      '(\\/[-a-z\\d%@_.~+&:]*)*' +
      '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return pattern.test(value);
};
