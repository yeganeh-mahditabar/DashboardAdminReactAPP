import { Home, UserList, NewUser, Products, Product} from './pages/Pages';

export default [
    {path: '/', element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/newUser', element: <NewUser />},
    {path: '/products', element: <Products />},
    {path: '/product/:productID', element: <Product />},
]