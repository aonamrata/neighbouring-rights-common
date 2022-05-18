
export interface Profile {
    profileId: string,
    identityId: string,
    profileUUID: string,
}

export type CsvRow = Record<string, string | null | number>;

export type RowError = {
    code: string,
    row: number,
    message: string,
    originalRow: CsvRow,
};
