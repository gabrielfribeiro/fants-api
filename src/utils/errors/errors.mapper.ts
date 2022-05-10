const APPLICATION_ERRORS = {
  INTERNAL_SERVER_ERROR: {
    message: 'INTERNAL_SERVER_ERROR',
    code: 1001
  }
}

const DATABASE_ERRORS = {
  CANNOT_CREATE_CHARACTERISTIC: {
    message: 'CANNOT_CREATE_CHARACTERISTIC',
    code: 2001
  },
  CANNOT_FIND_CHARACTERISTIC: {
    message: 'CANNOT_FIND_CHARACTERISTIC',
    code: 2002
  }
}

const REQUEST_ERRORS = {}

export default {
  APPLICATION_ERRORS,
  DATABASE_ERRORS,
  REQUEST_ERRORS
}
