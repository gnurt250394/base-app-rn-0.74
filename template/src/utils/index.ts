import {Linking, Platform} from 'react-native';
import moment from 'moment';
import {Constant} from '@common/constant';

export const htmltoText = (html: string) => {
  let text = html;
  text = text.replace(/\n/gi, '');
  text = text.replace(/<style([\s\S]*?)<\/style>/gi, '');
  text = text.replace(/<script([\s\S]*?)<\/script>/gi, '');
  text = text.replace(/<a.*?href="(.*?)[?"].*?>(.*?)<\/a.*?>/gi, ' $2 $1 ');
  text = text.replace(/<\/div>/gi, '\n\n');
  text = text.replace(/<\/li>/gi, '\n');
  text = text.replace(/<li.*?>/gi, '  *  ');
  text = text.replace(/<\/ul>/gi, '\n\n');
  text = text.replace(/<\/p>/gi, '\n\n');
  text = text.replace(/<br\s*[/]?>/gi, '\n');
  text = text.replace(/<[^>]+>/gi, '');
  text = text.replace(/^\s*/gim, '');
  text = text.replace(/ ,/gi, ',');
  text = text.replace(/ +/gi, ' ');
  text = text.replace(/\n+/gi, '\n\n');
  return text;
};

const pad = (num: number): string => {
  return ('0' + num).slice(-2);
};
export const mmss = (milisecs: number): string => {
  const secs = Math.floor(milisecs / 1000);
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;

  return pad(minutes) + ':' + pad(seconds);
};

export const snakeToCamel = function <T>(dataObj: any): T {
  return JSON.parse(
    JSON.stringify(dataObj)
      .trim()
      .replace(/("\w+":)/g, function (keys) {
        return keys.replace(/(.(\_|-|\s)+.)/g, function (subStr) {
          return subStr[0] + subStr[subStr.length - 1].toUpperCase();
        });
      }),
  );
};

export function adjustTime() {
  const currentTime = moment();
  const startTime = moment().set({hour: 7, minute: 0, second: 0});
  const endTime = moment().set({hour: 20, minute: 59, second: 59});

  if (currentTime.isBefore(startTime)) {
    // If current time is before 7:00 AM, set it to 7:00 AM
    return startTime;
  } else if (currentTime.isAfter(endTime)) {
    // If current time is after 8:59 PM, set it to 20:59
    return endTime;
  } else {
    // Current time is within the range
    currentTime.add(1, 'minute');
    return currentTime;
  }
}
export function getParam(name: string, url: string) {
  if (!url) {
    return;
  }
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  return results == null ? null : results[1];
}

function getSMSDivider(): string {
  return Platform.OS === 'ios' ? '&' : '?';
}
export const openMessenger = async (phone: string, body: string) => {
  try {
    await Linking.openURL(
      `sms:${phone}${getSMSDivider()}body=${encodeURI(body)}`,
    );
  } catch (err) {}
};

export function extractNumber(value: string) {
  const match = value.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

export function formatData<T>(arr: T[], initArr: T[], page: number) {
  if (arr.length == 0) {
    if (page === Constant.defaultPage) {
      return [];
    } else {
      return arr;
    }
  } else {
    if (page == Constant.defaultPage) {
      return arr;
    } else {
      return [...initArr, ...arr];
    }
  }
}

export const keyExtractor = (item: any, index: number) => {
  return index.toString();
};
