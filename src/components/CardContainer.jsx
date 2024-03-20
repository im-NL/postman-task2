import React from "react";
import Card from "./Card";
import '../../cursor.js';

function CardContainer({ cardList }) {
    return (
        <div className="card-container__parent stack">
            <h3>Search Results</h3>
            <div className="card-container stack">
                {cardList.map((card) => {
                    return <div className="stack" data-cursor="pointer2" key={card.id}>  
                        <Card title={card.title} image={card.poster_path} id={card.id}  />
                    </div>
                })}
            </div>
        </div>
    );
}

export default CardContainer;