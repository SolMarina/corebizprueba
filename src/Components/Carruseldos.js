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
        setImages(productsList)
    }
    getProducts();
    const items = []

    images.map(card => {
        items.push(
            <div className={styles.boximg}>
                <img className={styles.imgcard} src={card.url} onDragStart={handleDragStart} />
                <div className={styles.boxProduct}>
                    <p>{card.id}</p>
                    <p>{card.title}</p>
                    <p> CLP {card.price} $ </p>
                    <p>CÓDIGO {card.sku}</p>

                    <button className={styles.but} onClick={props.onClick}>COMPRAR</button>
                </div>
            </div>
        )
    })

    const responsive = {
        0: {
            items: 4
        },
        600: {
            items: 4
        },
        1024: {
            items: 4
        }
    };


    return (
        <div>
            {<AliceCarousel mouseTracking items={items} responsive={responsive} />}
        </div>
    )

}
export default Carruseldos;





