import React from "react";
import SolutionCard from "./solutionCard";

function WhatWeDo(props,style) {
    const items = [{

        name: "Political Campaign",
        img: "https://i.pinimg.com/564x/eb/89/00/eb89003efcd9b46ea4cfa855bf7553bf.jpg",
        details: "At PAMS, we understand the critical role effective communication plays in shaping political landscapes. Our dedicated Political Campaign Services are designed to empower candidates and political entities with a strategic and impactful presence."
    },
    {

        name: "Brand Promotion",
        img: "https://i.pinimg.com/564x/d6/f8/f0/d6f8f063d14ab30c2b9169c3d15b6db7.jpg",
        details: "In a competitive market, establishing and maintaining a strong brand presence is essential for success. Brand promotions, a service offered by experts in the field, is the key to creating lasting impressions and increasing brand visibility. This service is designed to strategically elevate your brand, engage your target audience, and drive positive brand perceptions. "
    },
    {

        name: "Digital Marketing",
        img: "https://i.pinimg.com/564x/36/d9/a2/36d9a22e85ffa3d9aaac33f78a98153a.jpg",
        details: "Digital marketing is a comprehensive strategy leveraging digital channels, platforms, and technologies to connect with target audiences, build brand awareness, and drive desired actions. In the contemporary business landscape, where online presence is paramount, digital marketing is a dynamic and essential tool for businesses of all sizes."
    },
    {

        name: "Event Management",
        img: "https://i.pinimg.com/564x/ec/a4/01/eca4010222f31b370c0640c81740b20b.jpg",
        details: "Event management is a dynamic and strategic process that involves planning, organizing, and executing events of varying scales and purposes. Whether it's a corporate conference, a product launch, a wedding, or a music festival, effective event management ensures seamless execution and creates memorable experiences for attendees."
    }


]




    return (
        <div className="WhatWeDo">
            <h3 className="solutionTitle">SOLUTIONS</h3>
            <SolutionCard items={items} 
          
            />


        </div>
    )
}
export default WhatWeDo;