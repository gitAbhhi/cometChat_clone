import React from 'react'

export const Footer = () => {
    
    const preFooterLinks = [
        {
          title: "Platform",
          links: [
            "Features", "Chat & Messaging", "Voice & Video Calls", "Security & Compliance", "Extensions",
            "Features at a glance", "Webhooks & Bots", "Moderation", "Analytics & Insights",
            "Implementation", "Widgets", "UI Kits", "SDKs & APIs",
            "Technologies",
            "React Chat SDK & API", "Angular Chat SDK & API", "Vue Chat SDK & API", "iOS Swift Chat SDK & API",
            "Android Kotlin Chat SDK & API", "Android Java Chat SDK & API", "React Native Chat SDK & API",
            "Ionic/Capacitor Chat SDK & API", "WordPress Chat SDK & API", "Laravel/PHP Chat SDK & API",
            "Flutter Chat SDK & API", "Next.js Chat SDK & API"
          ]
        },
        {
          title: "Solutions",
          links: [
            "Social Community", "Marketplace", "Healthcare", "Education", "Virtual Events",
            "On-Demand Service", "Dating Apps", "Gaming",
            "Enterprise", "Startups"
          ]
        },
        {
          title: "Developers",
          links: [
            "React", "Angular", "Vue", "iOS Swift", "Android Kotlin", "Android Java",
            "React Native", "Ionic/Capacitor", "WordPress", "Laravel/PHP", "Flutter", "Next.js",
            "Documentation", "Product updates", "Tutorials", "Open-source Apps", "Product status", "Glossary"
          ]
        },
        {
          title: "More",
          children: [
            {
              subtitle: "Resources",
              links: ["Customer stories", "Blog", "Give feedback", "Community forum", "Help center", "Partners"]
            },
            {
              subtitle: "Competitors",
              links: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"]
            },
            {
              subtitle: "Company",
              links: ["About us", "Careers", "Partners", "Pricing", "Chat with us"]
            }
          ]
        }
      ];

  return (
    <div>
        <h1>comet<b>chat</b></h1>
        <div className="bg-[#0A0814] text-gray-300 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* First 3 columns */}
        {preFooterLinks.slice(0, 3).map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-white cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Merged 4th column (Resources + Competitors + Company) */}
        <div>
          {preFooterLinks[3].children.map((child, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-white font-semibold mb-2">{child.subtitle}</h4>
              <ul className="space-y-2 text-sm">
                {child.links.map((link, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
        <div>
            <div className='h-[1px] w-full bg-gray-500'></div>
            <div className='flex justify-between'>

            <div className='gap-[20px] flex'> 
            <span>2023 © CometChat</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            </div>
            <div  className='gap-[20px] flex'>
                <a href=""><img src="" alt="" />Facebook</a>
                <a href=""><img src="" alt="" />LinkedIn</a>
                <a href=""><img src="" alt="" />Instagram</a>
                <a href=""><img src="" alt="" />Twitter</a>
                <a href=""><img src="" alt="" />GitHub</a>
            </div>
            </div>
        </div>
    </div>
  )
}
