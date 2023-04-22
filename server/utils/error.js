/**
 * Description placeholder
 * @date 4/21/2023 - 5:26:56 AM
 *
 * @param {number} status
 * @param {string} message
 */
const error = (status, message) => {
  switch (status) {
    case 401:
      return {
        error: {
          status: 401,
          code: "Unauthorized",
          message: message || "Unauthorized Access",
          timestamp: new Date().toISOString(),
        },
      };
    case 403:
      return {
        error: {
          status: 403,
          code: "Forbidden",
          message,
          timestamp: new Date().toISOString(),
        },
      };
    case 404:
      return {
        error: {
          status: 404,
          code: "Not Found",
          message,
          timestamp: new Date().toISOString(),
        },
      };
    case 409:
      return {
        error: {
          status: 409,
          code: "Conflict",
          message,
          timestamp: new Date().toISOString(),
        },
      };

    default:
      return {};
  }
};

module.exports = error;
