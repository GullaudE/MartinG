import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";





export default function Accueil() {

    return (
        <div className="card-container">
            <div className="card-container text-center w-auto shadow border  rounded mt-1">
                <div className="div-img">
                    <a href="/Component/Martin">
                        <img className= "img" src="/asset/image/Martin.jpg" alt="img character"/>
                    </a>
                </div>

                <div className="p-4" >
                    <a>
                        <h6>Martin Groslambert</h6>
                        <div>
                            <a href="https://www.instagram.com/martin.groslambert/">
                                <img
                                    src="/asset/image/icons8-instagram-50.png"
                                    width="50"
                                    height="50"
                                    alt="Instagram"
                                />
                            </a>
                            <a href="https://www.youtube.com/@martingroslambert">
                                <img
                                    src="/asset/image/icons8-lecture-de-youtube-50.png"
                                    width="50"
                                    height="50"
                                    alt="Youtube"
                                />
                            </a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}