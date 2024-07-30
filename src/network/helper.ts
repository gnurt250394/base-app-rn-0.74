import {createRef} from 'react';

import {API_CONFIG} from '@common/constant';
import {handleErrorApi, logout} from '@common/method';
import {translate} from '@assets/i18n/translate';
import {AxiosError, AxiosResponse, Method} from 'axios';

const responseDefault: ResponseBase<Record<string, unknown>> = {
  code: -500,
  status: false,
  msg: translate('error:have_error'),
};

export const onPushLogout = async () => {
  logout();
  /**
   * do something when logout
   */
};

export const controller = createRef<AbortController>();

//@ts-ignore
// init controller
controller.current = new AbortController();

export const cancelAllRequest = () => {
  controller.current?.abort();

  // reset controller, if not. all request cannot execute
  // because old controller was aborted

  // @ts-ignore
  controller.current = new AbortController();
};

export const handleResponseAxios = <T = Record<string, unknown>>(
  res: AxiosResponse<T>,
): ResponseBase<T> => {
  if (res.data) {
    return {code: API_CONFIG.CODE_SUCCESS, status: true, data: res.data};
  }

  return responseDefault as ResponseBase<T>;
};

export const handleErrorAxios = <T = Record<string, unknown>>(
  error: AxiosError,
): ResponseBase<T> => {
  if (error.code === API_CONFIG.STATUS_TIME_OUT) {
    // timeout
    return handleErrorApi(
      API_CONFIG.CODE_TIME_OUT,
    ) as unknown as ResponseBase<T>;
  }

  if (error.response) {
    if (error.response.status === API_CONFIG.RESULT_CODE_PUSH_OUT) {
      return handleErrorApi(
        API_CONFIG.RESULT_CODE_PUSH_OUT,
      ) as unknown as ResponseBase<T>;
    } else {
      return handleErrorApi(
        error.response.status,
      ) as unknown as ResponseBase<T>;
    }
  }

  return handleErrorApi(
    API_CONFIG.ERROR_NETWORK_CODE,
  ) as unknown as ResponseBase<T>;
};

export const handleParameter = <T extends ParamsNetwork>(
  props: T,
  method: Method,
): ParamsNetwork => {
  const {url, body, params} = props;

  return {
    ...props,
    method,
    url: url,
    data: body,
    params,
  };
};
