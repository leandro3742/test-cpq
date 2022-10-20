import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";
// Material Ui-Schema
import "bootstrap/dist/css/bootstrap.css";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

// Views
import Home from "./views/Home";
import Gtt from "./views/Gtt";
import Essen from "./views/Essen";
import EssenPuertas from "./views/EssenPuerta";
import Spinner from "./component/widgets/spinner";

function App() {
    const { store } = configureStore();

    // React.useEffect()
    return (
        <Provider store={store}>
            {/* <Layout > */}
            <SnackbarProvider
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                TransitionComponent={Slide}
                maxSnack={3}
            >
                <Spinner />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gtt" element={<Gtt />} />
                        <Route path="/essen" element={<Essen />} />
                        <Route path="/essen/puertas" element={<EssenPuertas />} />
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
            {/* </Layout> */}
        </Provider>
    );
}

export default App;
