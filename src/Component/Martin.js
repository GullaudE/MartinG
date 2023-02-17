import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Nav} from "react-bootstrap";

export default function Martin() {





    return (
        <div className="div-perso ">

            <div className="div-img-pers">
                <img  className="img-perso" src="/asset/image/Martin.jpg" alt="img character"/>
            </div>

            <a>
                <div className="text-center">
                    <h1> Mon Palmarès</h1>

                    <h6>Championnat de France de Cyclo :</h6><p>Champion de France U23🇫🇷</p>
                    <h6>Championnats du Monde:</h6><p> 13ème</p>
                    <h6> Coupe du Monde U23:</h6> <p> Top 10</p>
                    <h6> Coupe du Monde Élite:</h6> <p> Top 20</p>
                    <h6> Victoire d'étape :</h6><p> Coupe de France U23</p>
                </div>
            </a>

        </div>

    );
}