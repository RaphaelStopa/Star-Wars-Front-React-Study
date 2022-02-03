import { AxiosResponse } from 'axios';
import { Authentication } from '../model/authentication';
import { User } from '../model/user';
import { api } from './api';


export const authenticate = () => {
    const login = (authentication: Authentication): Promise<AxiosResponse<Authentication>> => {
        return api.post<Authentication>('/authenticate', authentication);
    };

    const getSession = (): Promise<AxiosResponse<User>> => {
        return api.get<User>(`/account`);
    };

    const createUser = (user: User): Promise<AxiosResponse<User>> => {
        return api.post<User>('/users/register', user);
    };

    const activateAccountToken = (activationKey: string): Promise<AxiosResponse<void>> => {
        return api.post<void>(`/account/activate/${activationKey}`);
    };

    const requestPasswordReset = (email: string): Promise<AxiosResponse<void>> => {
        return api.post<void>(`/account/reset-password/${email}/init`);
    };

    const finishPasswordReset = (key: string, newPassword: string): Promise<AxiosResponse<void>> => {
        return api.post<void>('/account/reset-password/finish', { key, newPassword });
    };

    const checkIfEmailExists = (email: string, checkIfIsAvailable: boolean): Promise<AxiosResponse<void>> => {
        return api.get<void>(`users/check-email/${email}/${checkIfIsAvailable}`);
    };

    const checkIfResetKeyIsValid = (key: string): Promise<AxiosResponse<number>> => {
        return api.get<number>(`users/check-reset-key/${key}`);
    };

    const checkIfActivationKeyIsValid = (key: string): Promise<AxiosResponse<string>> => {
        return api.get<string>(`users/check-activation-key/${key}`);
    };

    return {
        login,
        getSession,
        createUser,
        checkIfEmailExists,
        finishPasswordReset,
        requestPasswordReset,
        activateAccountToken,
        checkIfResetKeyIsValid,
        checkIfActivationKeyIsValid
    };
};

export default authenticate();
