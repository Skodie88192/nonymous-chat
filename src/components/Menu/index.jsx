/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import style from "./styles.module.css";

function Input({ name, removeUser }) {
    const [active, setActive] = useState(false);
    const onMenuClick = () => {
        setActive(!active);
    };

    return (
        <div className={style.menu}>
            {active ? (
                <>
                    <button className={style.icon} onClick={onMenuClick}>
                        <img src="/xmark.svg" alt="menu" title="menu" />
                    </button>
                    <menu className={style.options}>
                        <div className={style.user}>
                            <h3 className={style.name}>{name}</h3>
                            <i className="fa fa-user-circle fa-lg" aria-hidden="true"></i>

                        </div>
                        <div className={style.logout}>
                            <a onClick={removeUser} className={style.update}>
                                Logout
                            </a>
                            <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                        </div>
                        <p style={{ fontSize: ".65rem", marginTop: "0.5rem", fontStyle: "italic" }}>
                            Built by Samuel Kodie
                        </p>
                    </menu>
                </>
            ) : (
                <button className={style.icon} onClick={onMenuClick}>
                    <img src="/bars.svg" alt="menu" title="menu" />
                </button>
            )}
        </div>
    );
}

export default Input;
