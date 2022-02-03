import jwt_decode from 'jwt-decode';
import { AUTHORITIES } from '../../config/constants';


//mudar
class AuthUtils {
    static AUTH_TOKEN_KEY = 'jhi-authenticationToken';

    static paths = {
        // notification: {
        //     admin: '/notifications/new',
        //     resident: '/notifications/new',
        //     manager: '/notifications/new',
        //     user: '/notifications/new'
        // },
        // dashboard: {
        //     admin: '/admin-dashboard/dashboard',
        //     resident: '/resident-dashboard/new',
        //     manager: '/manager-dashboard/notifications',
        //     user: '/user-dashboard/notifications'
        // },
        // occurrence:{
        //     admin: '/notification-process',
        //     resident: '/notification-process',
        //     manager: '/notification-process',
        //     user: '/notification-process'
        // }
    };

    static isAuthenticated = () => {
        return localStorage.getItem(AuthUtils.AUTH_TOKEN_KEY) !== null;
    };

    static isUser = () => {
        if (!AuthUtils.isAuthenticated()) return false;
        // @ts-ignore
        return jwt_decode(AuthUtils.getToken()!).auth.includes(AUTHORITIES.USER);
    };

    static getToken = () => {
        return localStorage.getItem(AuthUtils.AUTH_TOKEN_KEY);
    };

    static setToken = (token: string) => {
        localStorage.setItem(AuthUtils.AUTH_TOKEN_KEY, token);
    };

    static removeToken = () => {
        localStorage.removeItem(AuthUtils.AUTH_TOKEN_KEY);
    };

    // static getMainPath = (forNotification: boolean = false, forOccurrence:boolean = false) => {
    //     if (AuthUtils.isAdmin()) {
    //         if(forNotification){
    //             return AuthUtils.paths.notification.admin;
    //         }
    //         if(forOccurrence){
    //             return AuthUtils.paths.occurrence.admin;
    //         }
    //         return AuthUtils.paths.dashboard.admin;

    //     } else if (AuthUtils.isGPASP()) {
    //         if(forNotification){
    //             return AuthUtils.paths.notification.resident
    //         }
    //         if(forOccurrence){
    //             return AuthUtils.paths.occurrence.resident;
    //         }
    //         return AuthUtils.paths.dashboard.resident;

    //     } else if (AuthUtils.isDirector() || AuthUtils.isDirectResponsible() || AuthUtils.isManager()) {
    //         if(forNotification){
    //             return AuthUtils.paths.notification.manager
    //         }
    //         if(forOccurrence){
    //             return AuthUtils.paths.occurrence.manager;
    //         }
    //         return AuthUtils.paths.dashboard.manager;
            
    //     } else if (AuthUtils.isUser()) {
    //         if(forNotification){
    //             return AuthUtils.paths.notification.user
    //         }
    //         if(forOccurrence){
    //             return AuthUtils.paths.occurrence.user;
    //         }
    //         return AuthUtils.paths.dashboard.user;

    //     } else {
    //         return '/';
    //     }
    // };
}

export default AuthUtils;
