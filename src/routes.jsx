import Home from "./pages/home/Home";
import UserList from "./pages/users/UserList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from'./pages/Product/Product';

const routes = [
    {path: '/', element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/newUser', element: <NewUser />},
    {path: '/products', element: <Products />},
    {path: '/product/:productID', element: <Product />},
]

export default routes;