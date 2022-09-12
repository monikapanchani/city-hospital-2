import logo from "./logo.svg";
import "./App.css";
import Header from "./container/Header/Header";
import Home from "./container/Home";
import Footer from "./container/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Department from "./container/department/Department";
import Doctor from "./container/doctor/Doctor";
import About from "./container/about/About";
import Contact from "./container/contact/Contact";
import Loginform from "./container/Loginform/Loginform";
import Appoinment from "./container/Appointment/Appointment";
import ListAppointment from "./container/Appointment/ListAppointment";
import Public from "./PublicRoute/Public";
import Private from "./PrivateRoute/Private";
import { TheameProvider } from "./context/themeContext";
import { Provider } from "react-redux";
import { persistor, store } from "./reduxsaga/store";
import { SnackbarProvider } from "notistack";
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TheameProvider>
            <Header />

            <Switch>
              <Public path={"/"} exact component={Home} />
              <Public path={"/department"} exact component={Department} />
              <Public path={"/doctor"} exact component={Doctor} />
              <Public path={"/about"} exact component={About} />
              <Public path={"/contact"} exact component={Contact} />
              <Public
                path={"/loginform"}
                restricted={true}
                exact
                component={Loginform}
              />
              <Private path={"/appointment"} exact component={Appoinment} />
              <Private
                path={"/list_appointment"}
                exact
                component={ListAppointment}
              />
            </Switch>

            <Footer />
          </TheameProvider>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
