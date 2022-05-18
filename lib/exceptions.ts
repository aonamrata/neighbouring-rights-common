// eslint-disable-next-line max-classes-per-file
import { RowError } from './types';

export class DontRetryException extends Error { }
export class RetryException extends Error { }
export class ValidationException extends Error {
    messageArr: RowError[];

    constructor(messageArr: RowError[]) {
        super('Validation Errors');
        this.messageArr = messageArr;
    }
}
