export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text);
};

export const isStringEmpty = (candidate: string | unknown): boolean =>
  !candidate ||
  typeof candidate === 'undefined' ||
  typeof candidate !== 'string' ||
  candidate === '' ||
  candidate === 'null' ||
  candidate.length === 0 ||
  candidate.trim().length === 0 ||
  false;

export const isValidUrl = (value: string): boolean => {
  const pattern: RegExp = new RegExp(
    '^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}' +
      '\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$',
    'i'
  );
  return pattern.test(value);
};
