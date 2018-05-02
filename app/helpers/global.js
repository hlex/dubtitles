import uuid from 'uuid';
import _ from 'lodash';

export const generateUniqueId = () => uuid();

export const toEntities = (items, keyName) =>
  _.reduce(
    items,
    (result, item) => {
      const key = _.get(item, keyName, generateUniqueId());
      return {
        ...result,
        [key]: item
      };
    },
    {}
  );

export const toFacility = facilities =>
  _.groupBy(facilities, facility => facility.floorIndex);

export const containSomeKey = object => Object.keys(object).length > 0;

export const isEmpty = (data) => {
  if (_.isNull(data)) return true;
  if (_.isUndefined(data)) return true;
  if (_.isEmpty(data)) return true;
  return false;
};

export const isNotEmpty = data => !isEmpty(data);

export const getFilePath = fileName =>
  (process.env.NODE_ENV === 'development' ? `/${fileName}` : `./${fileName}`);

export const escapeRegExp = str =>
  str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'); // eslint-disable-line

export const replaceAll = (str, find, replace) =>
  str.replace(new RegExp(escapeRegExp(find), 'g'), replace);

export const setDebounce = _.debounce((callback) => {
  if (callback) callback();
}, _.get(window, 'appSetting.refreshTime', 60) * 1000); // 120 sec

export const getParameterByName = (key) => {
  const sanitizedKey = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${sanitizedKey}=([^&#]*)`);
  const results = regex.exec(location.search); // eslint-disable-line
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const withOrdinalSuffix = (text) => {
  const number = _.toNumber(text)
  if (!/[0-9]/.test(number)) return text;
  const j = number % 10;
  const k = number % 100;
  if (j === 1 && k !== 11) {
    return `${number}st`;
  }
  if (j === 2 && k !== 12) {
    return `${number}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${number}rd`;
  }
  return `${number}th`;
};
