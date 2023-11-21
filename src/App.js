import React from "react";
import {Header} from './layuot/Header'
import {Footer} from "./layuot/Footer";
import {Main} from "./layuot/Main";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    );
}

export default App;
