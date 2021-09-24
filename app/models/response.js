exports.success = (results, statusCode) => {
    return {
      message: 'Success',
      error: false,
      code: statusCode,
      results
    };
};

exports.error = (message, statusCode) => {
    // List of common HTTP request code
    const codes = [200, 201, 400, 401, 404, 403, 422, 500];

    // Get matched code
    const findCode = codes.find((code) => code == statusCode);

    if (!findCode) statusCode = 500;
    else statusCode = findCode;

    return {
      message,
      code: statusCode,
      error: true
    };
};