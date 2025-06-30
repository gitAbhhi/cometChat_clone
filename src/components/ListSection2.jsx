import React from 'react'

export const ListSection2 = () => {
    
    const partnerPrograms = [
        {
          icon: "✅", // Replace with actual icon component
          title: "Affiliate partner program",
          description:
            "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers."
        },
        {
          icon: "🔌",
          title: "Technology partner program",
          description:
            "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!"
        },
        {
          icon: "🚀",
          title: "Start up growth program",
          description:
            "We help incubators, accelerators, co-working spaces that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies."
        }
      ];
      

    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 bg-white gap-[12px] p-[60px]'>
            {
                partnerPrograms.map((item, index) => (
                    <div key={index} className="benefit-card w-[394px] h-[96px]">
                        <div className="icon">{item.icon}</div>
                        <h3 className='text-black'>{item.title}</h3>
                        <p className='text-gray-800'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
