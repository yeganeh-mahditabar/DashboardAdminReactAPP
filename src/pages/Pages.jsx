import { lazy } from "react";

export const Home = lazy(() => import("./home/Home"));
export const UserList = lazy(() => import("./users/UserList"));
export const NewUser = lazy(() => import("./NewUser/NewUser"));
export const Products = lazy(() => import("./Products/Products"));
export const Product = lazy(() => import("./Product/Product"));