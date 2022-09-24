import { Navigate, RouteProps } from "react-router-dom"
import { Backet } from "../../Pages/basket"
import { MainPage } from "../../Pages/mainpage"
import { UserCabinet } from "../../Pages/UserCabinet"


export enum AppRoutes {
    EMPTY = 'empty',
    MAIN = 'main',
    BACKET = 'backet',
    USERCABINET = 'userCabinet',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.EMPTY]: '/',
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.BACKET]: '/backet',
    [AppRoutes.USERCABINET]: '/userCabinet'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.EMPTY]: {
        path: RoutePath.empty,
        element: <MainPage />
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.BACKET]: {
        path: RoutePath.backet,
        element: <Backet />
    },
    [AppRoutes.USERCABINET]: {
        path: RoutePath.userCabinet,
        element: <UserCabinet />
    }
}


