import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './pages/Login/Register/Register';
import Menubar from './pages/Shared/Menubar/Menubar';
import Banner from './pages/Home/Banner/Banner';
import Products from './pages/Home/Products/Products';
import Services from './pages/Home/Services/Services';
import AddProducts from './pages/Home/AddProducts/AddProducts';
import OrderProduct from './pages/Home/OrderProduct/OrderProduct';
import MyOrder from './pages/Home/MyOrder/MyOrder';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import MakeAdmin from './pages/DashBoard/MakeAdmin/MakeAdmin';
import AddReview from './pages/DashBoard/AddReview/AddReview';
import Review from './pages/Home/Review/Review';
import ManageOrders from './pages/DashBoard/ManageOrders/ManageOrders';
import ManageProducts from './pages/DashBoard/ManageProducts/ManageProducts';
import Payment from './pages/DashBoard/Payment/Payment';
import ManageProduct from './pages/DashBoard/ManageProduct/ManageProduct';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Style from './pages/Home/Style/Style';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/banner">
              <Banner></Banner>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/style">
              <Style></Style>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/dashBoard">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/manageProducts">
              <ManageProducts></ManageProducts>
            </Route>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
            <Route path="/footer">
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/orderProduct/:serviceId">
              <OrderProduct></OrderProduct>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
