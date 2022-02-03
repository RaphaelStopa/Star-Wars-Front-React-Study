import { Authority } from './authority';

export interface User {
    id?: number;
    login?: string
    email?: string;
    firstName?: string;
    lastName?: string;
    langKey?: string,
    activated?: boolean;
    authorities?: Authority[];
    createdBy?: string;
    createdDate?: string;
    lastModifiedBy?: string;
}
