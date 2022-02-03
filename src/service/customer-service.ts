import { AxiosResponse } from 'axios';
import customerApi from '../api/customer-api';
import { EditPasswordParams } from '../model/edit-password';
import HttpStatus from '../model/enums/http-status';
import { User } from '../model/user';

export const CustomerService = () => {
    const save = async (user: User): Promise<any> => {
        try {
            const result: AxiosResponse<any> = await customerApi.save(user);
            console.log('result ', result);
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result.data);
            } else if (result.status === HttpStatus.UNAUTHORIZED) {
                return Promise.reject({ status: 401 } as AxiosResponse);
            } else {
                return Promise.reject({ status: 400 } as AxiosResponse);
            }
        } catch (error) {
            console.error(error);
            //mudar error.response as AxiosResponse
            return Promise.reject(error as AxiosResponse);
        }
    };
    const activeCustomer = async (key: string): Promise<any> => {
        try {
            const result: AxiosResponse<any> = await customerApi.activateCustomer(key);
            console.log('result ', result);
            if (result.status === HttpStatus.OK) {
                return Promise.resolve();
            } else if (result.status === HttpStatus.UNAUTHORIZED) {
                return Promise.reject({ status: 401 } as AxiosResponse);
            } else {
                return Promise.reject({ status: 400 } as AxiosResponse);
            }
        } catch (error) {
            console.error(error);
            return Promise.reject(error as AxiosResponse);
        }
    };

    const editPassword = async (params: EditPasswordParams): Promise<any> => {
        try {
            const result: AxiosResponse<any> = await customerApi.editPassword(params);
            console.log('result ', result);
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result.data);
            } else if (result.status === HttpStatus.UNAUTHORIZED) {
                return Promise.reject({ status: 401 } as AxiosResponse);
            } else {
                return Promise.resolve(result.data);
            }
        } catch (error) {
            console.error(error);
            return Promise.reject(error as AxiosResponse);
        }
    };
    return {
        save,
        activeCustomer,
        editPassword
    };
};

export default CustomerService();
