import {Link} from "react-router-dom";
import React from "react";
import './PageButton.css';

const PageButton = ({pg, currentPage}) => {
    return (
        <div className={'pages_buttons'}>
            {pg === +currentPage ? <span className={'cpage'}>{currentPage}</span> : <Link to={pg.toString()}>
                <button>{pg}</button>
            </Link>}

        </div>
    );
};

export default PageButton;