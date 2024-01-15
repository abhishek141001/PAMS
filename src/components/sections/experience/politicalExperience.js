import React from "react";
import SolutionCard from "../WhatWeDo/solutionCard";


function PoliticalExp(props,style){
      const polEx = [
        {
            name:"Shakti Singh",
            img:"data:image/jpeg;base64,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",
            details:"Official delegate - Youth 20 India (G20) | President- Delhi University Students’ Union(2018-19) | IN charge West Bengal & NEC (BJYM) | Represented India at UN Ecosoc"
        },
        {
            name:"Chetan Anand",
            img:"https://www.jagranimages.com/images/newimg/10112020/10_11_2020-chetan_anand_21050096.jpg",
            details:"Chetan Anand (born 20 November 1991) is an Indian politician from the state of Bihar. He is elected as a Member of the Legislative Assembly (MLA) from Sheohar constituency representing the Rashtriya Janata Dal (RJD) in the 2020 election to the Bihar Legislative Assembly."
        },
        {
            name:"Lovely Anand",
            img:"https://static.toiimg.com/thumb/msid-67695891,width-400,resizemode-4/67695891.jpg",
            details:"Lovely Anand is an Indian politician and former member of the 10th Lok Sabha, the lower house of the Parliament of India and also the granddaughter of Freedom Fighter Rameshwar Prasad Sinha. "
        }
      ]

    return(
        <div className="WhatWeDo" id="gallery">
        <h3 className="solutionTitle">POLITICAL EXPERIENCE</h3>
        <SolutionCard items={polEx} 
       style={{backgroundColor: "black", color:"white"}}
        />


    </div>
    )
}


export default PoliticalExp;