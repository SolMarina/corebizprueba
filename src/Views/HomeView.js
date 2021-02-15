import React, { useState, useEffect } from 'react';
import styles from '../Views/HomeView.module.css'
import NavBar from '../Components/NavBar';
import Carrusel from '../Components/Carrusel';
import BottomFooter from '../Components/BottomFooter';
import Carruseldos from '../Components/Carruseldos';




const HomeView = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <section className={styles.box1}>
                <NavBar pedidos={count} />

            </section>
            <section className={styles.box2}>
                <Carrusel />
            </section>
            <section className={styles.box3}>
                <Carruseldos onClick={() => setCount(count + 1)}/>
            </section>
            <section className={styles.box4}>
                <BottomFooter />
            </section>

        </div>
    )


};
export default HomeView;