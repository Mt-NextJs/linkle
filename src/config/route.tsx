import {ClientRouteType} from "@config/types";

export const ClientRoute: ClientRouteType = {
    MAIN: '/',
    LOGIN: '/login',
    JOIN: '/join',
    ADMIN: '/admin',
    MY: '/admin/my',
    PROFILE: {
        DETAIL: '/admin/profile/detail',
        EDIT: '/admin/profile/edit',
    }
};
