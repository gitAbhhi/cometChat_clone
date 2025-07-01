import React from 'react'

export const ListSection = () => {
    const benefits = [
        {
            icon: "🧩", // Replace with actual icon component/class
            title: "Free credits",
            description: "Empowering partners to scale."
        },
        {
            icon: "💰",
            title: "Revenue share",
            description: "Get monthly recurring revenues when you refer clients."
        },
        {
            icon: "🎓",
            title: "Training and mentoring sessions",
            description: "Enabling partners to deliver the best experience."
        },
        {
            icon: "👨‍💻",
            title: "Special developer access",
            description: "Get an all-access account to build unlimited PoCs for your clients."
        },
        {
            icon: "⏱️",
            title: "Reduced time",
            description: "Deliver your products much faster with our partners’ programs."
        },
        {
            icon: "📊",
            title: "Value addition to your users",
            description: "Provide more value to your clients and enhance their experience."
        },
        {
            icon: "📚",
            title: "Knowledge sessions",
            description: "Access to product and market sessions."
        },
        {
            icon: "🛠️",
            title: "On-demand support",
            description: "Technical assistance for implementation."
        },
        {
            icon: "💼",
            title: "Significant passive income",
            description: "Earn income through long-term partnerships."
        }
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 h-[588px] bg-[#0A0914] gap-[64px] pr-[64px] pl-[64px] pt-[48px] pb-[80px]'>
            {
                benefits.map((item, index) => (
                    <div key={index} className="benefit-card w-[394px] h-[96px] gap-[12px] flex flex-col leading-tight">
                        <div className="icon w-[38px] h-[38px]">{item.icon}</div>
                        <h3 className='text-[#FAFAFF] text-[18px] font-[640]'>{item.title}</h3>
                        <p className='text-gray-500 text-[18px] font-[500]'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
