import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../store/theme.slice";
import userLogo from './../../images/user.png';

const Header = () => {
    const {darkMode} = useSelector(state => state['themeStore']);
    const dispatch = useDispatch();
    const themeSwitcher = () => {
        dispatch(changeTheme(darkMode));
    }
    return (
        <div>
            <div className={css.header}>
                <div>
                    <div className={css.round_circle}>
                        <div>
                            <img src={userLogo} width={'30px'} alt={'user'}/>
                        </div>
                    </div>
                    <div className={css.username}>username</div>
                </div>

                <div>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'movies'}>Movies</NavLink>
                    <NavLink to={'genres'}>Genres</NavLink>
                </div>
                <div>
                    <input className={css.toggle} onChange={themeSwitcher} type="checkbox"/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Header;