import React from "react";
import './Produtos.css'

export default function Produtos(props){
    return(
        <section>

            <h1>{props.name}</h1>

            <div className="products">

                <figure>
                    <img src="https://source.unsplash.com/random/300×299" alt="" />
                    <caption>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt voluptates nulla quos quia adipisci corporis quisquam possimus iste iusto quam repellendus.</caption>
                </figure>

                <figure>
                    <img src="https://source.unsplash.com/random/301×300" alt="" />
                    <caption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At rerum dolorem inventore ratione sapiente labore ex, harum reiciendis consectetur nihil.</caption>
                </figure>

                <figure>
                    <img src="https://source.unsplash.com/random/300×301" alt="" />
                    <caption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores impedit temporibus non odio voluptate iusto quidem vero.</caption>
                </figure>
            </div>
        </section>
    )
}