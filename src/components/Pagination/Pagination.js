import React from 'react';
import {useForm} from "react-hook-form";
import {Link, useParams} from "react-router-dom";

import css from './Pagination.module.css'
import PageButton from "../PageButton/PageButton";

const Pagination = () => {
    let {currentPage} = useParams();
    if (!currentPage) currentPage = 1;

    let offset = 1;
    if (currentPage >= 3) offset = currentPage - 2;

    let pagesArr = [];
    for (let i = offset; i < offset + 10; i++) if (i <= 500) pagesArr.push(i);

    const {register, watch} = useForm();
    let inputPage = watch(['inputPage']);
    return (
        <div>
            <div className={css.buttons_wrap}>
                {+currentPage > 1 && <Link to={(+currentPage - 1).toString()}>
                    <button>Prev</button>
                </Link>}

                {pagesArr.map(pg => <PageButton key={pg} pg={pg} currentPage={currentPage}/>)}
                {+currentPage < 500 && <Link to={(+currentPage + 1).toString()}>
                    <button>Next</button>
                </Link>}
            </div>
            <div className={css.buttons_wrap}>
                <span className={css.p_num_text}> Enter page number: </span>
                <input className={css.input_text} size={'2'} defaultValue={''} {...register('inputPage')}/>
                <Link to={inputPage.toString()}>
                    <button>SET!</button>
                </Link>
            </div>
        </div>
    );
};

export default Pagination;