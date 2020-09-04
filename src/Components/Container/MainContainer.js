import React, {useState} from '../../../node_modules/react';
import './MainContainer.css'

const MainContainer = (props) => {

    return (

        <div className="outer-container">
            <div className="main-container">
                {/* <div className="title-card">find a constellation</div> */}
            </div>
            <div className="copyright-notice">© Carl Lapierre {new Date().getFullYear()}</div>
        </div>
    );
}

export default MainContainer;
