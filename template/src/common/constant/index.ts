export const MMKV_KEY = {
  APP_TOKEN: 'APP_TOKEN',
} as const;

export const ResponseCode = {
  SUCCESS: 200,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  UNKNOW: 999,
  BAD_REQUEST: 400,
  GATEWAY_TIME_OUT: 504,
};

export enum SLICE_NAME {
  APP = 'APP_',
  AUTHENTICATION = 'AUTHENTICATION_',
}

export const Constant = {
  defaultPage: 1,
};
