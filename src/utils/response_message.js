class ResponseMessage {
  static StatusContinue = { statusCode: 100, message: "Continue" }; // RFC 9110, 15.2.1
  static StatusSwitchingProtocols = {
    statusCode: 101,
    message: "Switching Protocol",
  }; // RFC 9110, 15.2.2
  static StatusProcessing = { statusCode: 102, message: "Request Processing" }; // RFC 2518, 10.1
  static StatusEarlyHints = { statusCode: 103, message: "Early Hints" }; // RFC 8297

  static StatusOK = { statusCode: 200, message: "Success" }; // RFC 9110, 15.3.1
  static StatusCreated = { statusCode: 201, message: "Document Created" }; // RFC 9110, 15.3.2
  static StatusAccepted = { statusCode: 202, message: "Accepted" }; // RFC 9110, 15.3.3
  static StatusNonAuthoritativeInfo = {
    statusCode: 203,
    message: "Non authoritative info",
  }; // RFC 9110, 15.3.4
  static StatusNoContent = { statusCode: 204, message: "No content" }; // RFC 9110, 15.3.5
  static StatusResetContent = { statusCode: 205, message: "Reset content" }; // RFC 9110, 15.3.6
  static StatusPartialContent = { statusCode: 206, message: "Partial content" }; // RFC 9110, 15.3.7
  static StatusMultiStatus = { statusCode: 207, message: "Multi status" }; // RFC 4918, 11.1
  static StatusAlreadyReported = {
    statusCode: 208,
    message: "Already reported",
  }; // RFC 5842, 7.1
  static StatusIMUsed = { statusCode: 226, message: "IMUsed" }; // RFC 3229, 10.4.1

  static StatusMultipleChoices = {
    statusCode: 300,
    message: "Multiple choices",
  }; // RFC 9110, 15.4.1
  static StatusMovedPermanently = {
    statusCode: 301,
    message: "Moved permanently",
  }; // RFC 9110, 15.4.2
  static StatusFound = { statusCode: 302, message: "Found" }; // RFC 9110, 15.4.3
  static StatusSeeOther = { statusCode: 303, message: "See other" }; // RFC 9110, 15.4.4
  static StatusNotModified = { statusCode: 304, message: "Not modified" }; // RFC 9110, 15.4.5
  static StatusUseProxy = { statusCode: 305, message: "Use proxy" }; // RFC 9110, 15.4.6
  static _ = 306; // RFC 9110, 15.4.7 (Unused)
  static StatusTemporaryRedirect = {
    statusCode: 307,
    message: "Temporary redirect",
  }; // RFC 9110, 15.4.8
  static StatusPermanentRedirect = {
    statusCode: 308,
    message: "Permanent redirect",
  }; // RFC 9110, 15.4.9

  static StatusBadRequest = { statusCode: 400, message: "Bad request" }; // RFC 9110, 15.5.1
  static StatusUnauthorized = { statusCode: 401, message: "Unauthorized" }; // RFC 9110, 15.5.2
  static StatusPaymentRequired = {
    statusCode: 402,
    message: "Payment required",
  }; // RFC 9110, 15.5.3
  static StatusForbidden = {
    statusCode: 403,
    message: "You don't have the permission the access to this request",
  }; // RFC 9110, 15.5.4
  static StatusNotFound = { statusCode: 404, message: "Not found" }; // RFC 9110, 15.5.5
  static StatusMethodNotAllowed = {
    statusCode: 405,
    message: "Method not allowed",
  }; // RFC 9110, 15.5.6
  static StatusNotAcceptable = {
    statusCode: 406,
    message: "Not acceptable",
  }; // RFC 9110, 15.5.7
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

  static StatusInternalServerError = {
    statusCode: 500,
    message: "Internal Server Error",
  }; // RFC 9110, 15.6.1
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

export default ResponseMessage;
