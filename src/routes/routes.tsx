import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Landing from '../pages/landing';
import Login from '../pages/auth/login';
import Profile from '../pages/profile';
import SignIn from '../pages/signin';


const Routes = () => {
    /* criando as rotas */
    return (
        <BrowserRouter basename="/">

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/login" exact component={Login} />
                <Route path="/landing" exact component={Landing} />
                {/*<PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={adminDashboard}/>
                <AdminRoute path="/category/create" exact component={AddCategory}/>
                <AdminRoute path="/product/create" exact component={AddProduct}/>
                <AdminRoute path="/admin/products" exact component={EditProducts}/>
                <AdminRoute path="/admin/category" exact component={EditCategory}/>
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>
                <Route path="/product/:productId" exact component={Product}/>
    <Route path="/cart/" exact component={Cart}/>*/}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;