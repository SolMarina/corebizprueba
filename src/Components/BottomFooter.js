import React from 'react';
import vtex from '../Assets/img/statics_vtex.png'
import styles from '../Components/BottomFooter.module.css'
import core from '../Assets/img/statics_logo_alt.png'
const BottomFooter = () => {

    return (
        <div>
            <footer class="page-footer black">

               
                    <div class="col l6 s12" className={styles.img1}>
                        <h5 class="white-text">Localización</h5>
                        <p class="grey-text text-lighten-4">Av Adrómeda, 2000.Boloco 6 e 8 </p>
                        <p class="grey-text text-lighten-4">Alphavile SP </p>
                        <p class="grey-text text-lighten-4">brazil@corebiz.ag</p>
                        <p class="grey-text text-lighten-4">+55 11 3090 1039</p>
                    </div>
                    <div class="col l4 offset-l2 s12"className={styles.img1} >
                        <ul>
                            <li><a class="black-text text-lighten-3" href="#!"><a class="black-text btn white "><i class="material-icons left black-text">mail</i>EMTRE EM CONTATO</a></a></li>
                            <li><a class="black-text text-lighten-3" href="#!"><br></br></a></li>
                            <li><a class="grey-text text-lighten-3" href="#!"><a class="black-text btn white"><i class="material-icons left black-text">headset_mic</i>FALE COM O NOSSO</a></a></li>
                        </ul>
                    </div>
                    <div className={styles.imglogos}>
                        <div className={styles.imgFoo}>
                            <a class="grey-text text-lighten-4 right" href="#!">Powered By</a>
                            <a class="grey-text text-lighten-4 right" href="#!"><img src={vtex} alt=""></img></a>
                        </div>
                        <div className={styles.imgFoo}>
                            <a class="grey-text text-lighten-4 right" href="#!">Created By</a>
                            <a class="grey-text text-lighten-4 right" href="#!"><img src={core} alt=""></img></a>
                        </div>
                    </div>

                



            </footer>

        </div>
    );
};
export default BottomFooter;