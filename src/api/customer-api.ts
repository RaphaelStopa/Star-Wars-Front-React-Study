import { AxiosResponse } from 'axios';
import { EditPasswordParams } from '../model/edit-password';
import { User } from '../model/user';
import { api } from './api';

export const customerApi = () => {
    const save = (user: User): Promise<AxiosResponse<User>> => {
        return api.put<User>('/account/update', user);
    };

    const activateCustomer = (key: string): Promise<AxiosResponse<void>> => {
        return api.post<void>(`/account/activate/${key}`);
    };

    const editPassword = (params: EditPasswordParams): Promise<AxiosResponse<any>> => {
        return api.put<any>('/account/change-password', params);
    };
    return {
        save,
        activateCustomer,
        editPassword
    };
};

export default customerApi();
