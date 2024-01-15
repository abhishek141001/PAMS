import React from "react";


function SolutionCard({items,style}) {
    return (
        <div className="card" >
            {items.map((item) => (
                <div className="SolutionsCard " style={style}>
                    <img src="/img/pin.png" width={"30px"}/>
                    <div className="solutionCardDetail ">
                    <h3>{item.name}</h3>
                    <img className="cardImg" src={item.img} alt="img" />
                    <p>{item.details}</p>
                    </div>
                </div>
            ))}


        </div>
    )
}
export default SolutionCard;