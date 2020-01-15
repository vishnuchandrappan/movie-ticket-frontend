import React from 'react';
import Footer from "../components/Footer";
import Nav from '../components/NavBar';
export default function Main(props) {
    return (
        <React.Fragment>
            <Nav/>
            <div className="container">
                {props.children}
            </div>
            <Footer/>
        </React.Fragment>
    )
}
