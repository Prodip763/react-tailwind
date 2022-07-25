import React from "react";
import PricingOption from "../PricingOption/PricingOption";



const Pricing = () => {
    const pricingOptions= [
        {id:1, name: 'Free', price: 0, benefits: [
            'lifetime free', 
            'unlimitted deals', 
            'localized deals',
            'crazy deals', 
            'fantastic deals'
        ]},
        {id:2, name: 'Regular', price: 9.99,benefits: [
            'everything on free', 
            'unlimitted deals', 
            'localized deals',
            'crazy deals', 
            'fantastic deals'
        ]},
        {id:3, name: 'premium', price: 19.99, benefits: [
            'everything on regular', 
            'unlimitted deals', 
            'localized deals',
            'crazy deals', 
            'fantastic deals'
        ]}
    ]
    return(
        <div className="bg-indigo-300 p-4 mt-8">
            <h1 className="text-6xl font-mono text-yellow-100">Best Deals of the Town</h1>
            <p>Welcome to Meta-Wiki, the global community site for the Wikimedia Foundation's projects and related projects, from coordination and documentation to planning and analysis.</p>
            <div className="grid md:grid-cols-3 gap-3 mt-8">
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;