import React from "react";
import './Missao.css'

export default function Missao(props) {
    return (
        <section className="missao-corpo">

            <h1>{props.name}</h1>

            <div className="missao-body">
                <div className="missao-text">
                    <h2>Missão</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sequi nobis molestias dolorem velit. Odit odio fuga, architecto, velit libero nobis eaque accusamus a officiis dolorem nostrum iste optio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam error mollitia officiis, id culpa odit molestias doloremque tenetur accusantium magni in sequi odio nesciunt molestiae quas pariatur qui labore!
                    </p>
                </div>
                <div className="missao-text">
                    <h2>Visão</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sequi nobis molestias dolorem velit. Odit odio fuga, architecto, velit libero nobis eaque accusamus a officiis dolorem nostrum iste optio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam error mollitia officiis, id culpa odit molestias doloremque tenetur accusantium magni in sequi odio nesciunt molestiae quas pariatur qui labore!
                    </p>
                </div>
                <div className="missao-text">
                    <h2>Valores</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sequi nobis molestias dolorem velit. Odit odio fuga, architecto, velit libero nobis eaque accusamus a officiis dolorem nostrum iste optio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam error mollitia officiis, id culpa odit molestias doloremque tenetur accusantium magni in sequi odio nesciunt molestiae quas pariatur qui labore!
                    </p>
                </div>

            </div>

               

        </section>
    )
}