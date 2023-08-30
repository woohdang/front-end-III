
import React from 'react';
import styles from './NoPage.module.scss';
import error from './images/error.png';


function NoPage(){

    return (
        <section>
        <h1>404</h1>
        <img className={styles["error"]} src={error} alt="404-error"/>
        </section>
    )
}

export default NoPage;