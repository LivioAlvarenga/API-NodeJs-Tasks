export function extractQueryParams(url) {
  return url
    .substr(1)
    .split("&")
    .reduce((urlParams, param) => {
      const [key, value] = param.split("=");
      urlParams[key] = value;
      return urlParams;
    }, {});
}
