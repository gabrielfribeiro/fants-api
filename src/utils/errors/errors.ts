import { HttpException, HttpStatus } from '@nestjs/common'
import MAPPER from './errors.mapper'

export class INTERNAL_SERVER_ERROR extends HttpException {
  constructor(error?: Error) {
    super(
      {
        ...MAPPER.APPLICATION_ERRORS.INTERNAL_SERVER_ERROR,
        error: error
      },
      HttpStatus.INTERNAL_SERVER_ERROR
    )
  }
}

export class CANNOT_CREATE_CHARACTERISTIC extends HttpException {
  constructor() {
    super(
      {
        ...MAPPER.DATABASE_ERRORS.CANNOT_CREATE_CHARACTERISTIC
      },
      HttpStatus.BAD_REQUEST
    )
  }
}

export class CANNOT_FIND_CHARACTERISTIC extends HttpException {
  constructor() {
    super(
      {
        ...MAPPER.DATABASE_ERRORS.CANNOT_FIND_CHARACTERISTIC
      },
      HttpStatus.BAD_REQUEST
    )
  }
}
