import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from '../Components/Carruseldos.module.css'



const Carruseldos = (props) => {

    const [images, setImages] = useState([]);
    const handleDragStart = (e) => e.preventDefault();

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {



        const url = 'https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products'
        const resp = await fetch(url);
        const data = await resp.json();


        //console.log('resp.json()')
        //console.log(data);
        //console.log('resp.json()')

        const productsList = data.map(img => {
            return {
                id: img.id,
                title: img.product,
                url: img.img,
                price: img.price,
                sku: img.sku
            }

        })

        console.log(productsList);
        setImages (productsList)
    }

    const items = []
    images.map(card => {
        items.push(
            <div className={styles.boximg}>
                <img src={card.url} onDragStart={handleDragStart} />
                <div className={styles.boxProduct}>
                    <p>{card.id}</p>
                    <p>{card.title}</p>
                    <p>{card.price}</p>
                    <p>{card.sku}</p>

                    <button onClick={props.onClick}>Agregar al carrito</button>
                </div>
            </div>
        )
    })



    return (

        <div>
            {<AliceCarousel mouseTracking items={items} />}

        </div>
    )

}
export default Carruseldos;





