export enum HttpStatusCode {
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}

export enum ErrorType {
  INVALID_CLIENT_NAME_EXISTED = '/clients.client-name-existed',
  INVALID_LOCATION_EXISTED = '/locations.location-existed',
  INVALID_EXISTED_USER = '/users.user-existed',
  CONCURRENCY_FAILURE = '/common.concurrency-failure',
  INVALID_CLIENT_ALIAS_EXISTED = '/clients.client-alias-existed',
  INVALID_FORM_TITLE_EXISTED = '/forms.form-title-existed',
}
