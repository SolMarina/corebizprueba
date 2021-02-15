import React, { useState, useEffect } from 'react';
import styles from '../Views/HomeView.module.css'
import NavBar from '../Components/NavBar';
import Carrusel from '../Components/Carrusel';
import BottomFooter from '../Components/BottomFooter';
import Carruseldos from '../Components/Carruseldos';




const HomeView = () => {
    const [count, setCount] = useState(0);
    /* // const [catalogo, setCatalogo] = useState(["bla"]);

    const peticion = fetch(`https://api.giphy.com/v1/gifs/search?api_key=enpqO5rCIxkDQjUZdqpqN8D26UlpQb2B&q=bulldog`)
    const dataNew = []
   /*  const getData = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=enpqO5rCIxkDQjUZdqpqN8D26UlpQb2B&q=bulldog`)
          .then(response => response.json())
          .then(data => setCatalogo(data));
      };*/


    //data={catalogo}
    /* peticion
        .then(resp => resp.json())
        .then(({ data }) => {
            console.log('dataNew');
            console.log(data)
            console.log('data');
            dataNew.push(data);
            console.log(dataNew);
        }) */
    // .catch(console.warn);
    // console.log('dataNew');
    // console.log(catalogo);
    // console.log('dataNew'); */

    


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