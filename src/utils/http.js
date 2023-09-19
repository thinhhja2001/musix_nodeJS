class HTTP {
  static StatusContinue = 100; // RFC 9110, 15.2.1
  static StatusSwitchingProtocols = 101; // RFC 9110, 15.2.2
  static StatusProcessing = 102; // RFC 2518, 10.1
  static StatusEarlyHints = 103; // RFC 8297

  static StatusOK = 200; // RFC 9110, 15.3.1
  static StatusCreated = 201; // RFC 9110, 15.3.2
  static StatusAccepted = 202; // RFC 9110, 15.3.3
  static StatusNonAuthoritativeInfo = 203; // RFC 9110, 15.3.4
  static StatusNoContent = 204; // RFC 9110, 15.3.5
  static StatusResetContent = 205; // RFC 9110, 15.3.6
  static StatusPartialContent = 206; // RFC 9110, 15.3.7
  static StatusMultiStatus = 207; // RFC 4918, 11.1
  static StatusAlreadyReported = 208; // RFC 5842, 7.1
  static StatusIMUsed = 226; // RFC 3229, 10.4.1

  static StatusMultipleChoices = 300; // RFC 9110, 15.4.1
  static StatusMovedPermanently = 301; // RFC 9110, 15.4.2
  static StatusFound = 302; // RFC 9110, 15.4.3
  static StatusSeeOther = 303; // RFC 9110, 15.4.4
  static StatusNotModified = 304; // RFC 9110, 15.4.5
  static StatusUseProxy = 305; // RFC 9110, 15.4.6
  static _ = 306; // RFC 9110, 15.4.7 (Unused)
  static StatusTemporaryRedirect = 307; // RFC 9110, 15.4.8
  static StatusPermanentRedirect = 308; // RFC 9110, 15.4.9

  static StatusBadRequest = 400; // RFC 9110, 15.5.1
  static StatusUnauthorized = 401; // RFC 9110, 15.5.2
  static StatusPaymentRequired = 402; // RFC 9110, 15.5.3
  static StatusForbidden = 403; // RFC 9110, 15.5.4
  static StatusNotFound = 404; // RFC 9110, 15.5.5
  static StatusMethodNotAllowed = 405; // RFC 9110, 15.5.6
  static StatusNotAcceptable = 406; // RFC 9110, 15.5.7
  static StatusProxyAuthRequired = 407; // RFC 9110, 15.5.8
  static StatusRequestTimeout = 408; // RFC 9110, 15.5.9
  static StatusConflict = 409; // RFC 9110, 15.5.10
  static StatusGone = 410; // RFC 9110, 15.5.11
  static StatusLengthRequired = 411; // RFC 9110, 15.5.12
  static StatusPreconditionFailed = 412; // RFC 9110, 15.5.13
  static StatusRequestEntityTooLarge = 413; // RFC 9110, 15.5.14
  static StatusRequestURITooLong = 414; // RFC 9110, 15.5.15
  static StatusUnsupportedMediaType = 415; // RFC 9110, 15.5.16
  static StatusRequestedRangeNotSatisfiable = 416; // RFC 9110, 15.5.17
  static StatusExpectationFailed = 417; // RFC 9110, 15.5.18
  static StatusTeapot = 418; // RFC 9110, 15.5.19 (Unused)
  static StatusMisdirectedRequest = 421; // RFC 9110, 15.5.20
  static StatusUnprocessableEntity = 422; // RFC 9110, 15.5.21
  static StatusLocked = 423; // RFC 4918, 11.3
  static StatusFailedDependency = 424; // RFC 4918, 11.4
  static StatusTooEarly = 425; // RFC 8470, 5.2.
  static StatusUpgradeRequired = 426; // RFC 9110, 15.5.22
  static StatusPreconditionRequired = 428; // RFC 6585, 3
  static StatusTooManyRequests = 429; // RFC 6585, 4
  static StatusRequestHeaderFieldsTooLarge = 431; // RFC 6585, 5
  static StatusUnavailableForLegalReasons = 451; // RFC 7725, 3

  static StatusInternalServerError = 500; // RFC 9110, 15.6.1
  static StatusNotImplemented = 501; // RFC 9110, 15.6.2
  static StatusBadGateway = 502; // RFC 9110, 15.6.3
  static StatusServiceUnavailable = 503; // RFC 9110, 15.6.4
  static StatusGatewayTimeout = 504; // RFC 9110, 15.6.5
  static StatusHTTPVersionNotSupported = 505; // RFC 9110, 15.6.6
  static StatusVariantAlsoNegotiates = 506; // RFC 2295, 8.1
  static StatusInsufficientStorage = 507; // RFC 4918, 11.5
  static StatusLoopDetected = 508; // RFC 5842, 7.2
  static StatusNotExtended = 510; // RFC 2774, 7
  static StatusNetworkAuthenticationRequired = 511; // RFC 6585, 6
}

export default HTTP;
