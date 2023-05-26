import Zanzibar from '../Images/zanzibarblog.jpg' ;
import Zanzibar2 from '../Images/Zanzibar.jpg' ;
import Gorillatrekking from '../Images/bwindi4.jpg' ;
import Rwenzori from '../Images/rwenzorimountains.jpg'
import uganda from '../Images/elephants-crossing.jpg'
//import serengeti5 from '../Images/serengeti.jpg'
//import tarangire from '../Images/tarangire.jpg'
import rwanda from '../Images/bwindi3.jpg'
import romance from '../Images/romance.jpg'
import tanzania from '../Images/kilimanjaro5.jpg'


import Serengeti from '../Images/serengeti5.jpg'
import Kenya from '../Images/Kenya.jpeg'
import Kili from '../Images/clearblueskymountain.jpg'
import Kiso from '../Images/discoveruganda.jpg'

//import Kenyan8Places from '../Pages/blog/Kenyan8Places';
//import Ugandan8Places from '../Pages/blog/Ugandan8Places';
//import EA8Places from '../Pages/blog/EA8Places';
//import Rwanda8Places from '../Pages/blog/Rwanda8Places';
//import Tanzania8Places from '../Pages/blog/Tanzania8Places';



export const blogs = [
    {
        id:1,
        recent:true,
        popular:false,
        image: uganda,
        path: "/ugandan8places",
        location:"Queen Elizabeth National Park, Uganda",
        heading:"8 Places To Visit In Uganda.",
        paragraph:"The Pearl of Africa is a title Uganda undisputedly holds and everyone "+
        "that visits, leaves agreeing to that." +
        " Uganda has got a culture for giving, "+
        "the land gives through its nature, and the people through their energy.",
    },
    {
        id:2,
        recent:false,
        popular:true,
        image: Zanzibar,
        path: "/zanzibar8places",
        location:"The Coastal Beaches",
        heading:"8 Places To Visit In Zanzibar",
        paragraph:"The picturesque island located off the coast of Tanzania, offers a perfect escape from the hustle and bustle of city life. Zanzibar has something to offer for everyone. So pack your bags and head to Zanzibar for an unforgettable coastal vacation experience.",
    },
   
{
    id:3,
    recent:true,
    popular:false,
    image: tanzania,
    path: "/tanzania8places",
    location:"Mt. Kilimanjaro, Tanzania",
    heading:"8 Places To Visit In Tanzania.",
    paragraph:"Tanzania offers many amazing places"+
    " for travelers who love nature and culture"+
    ". One popular attractions is"+
    " the Mountain Kilimanjaro [5,895 Metres] the "+
    "highest mountain In Africa,.",

},

{
        id:4,
        recent:true,
        popular:true,
        path: "/gorillatrekkingtips",
        image: Gorillatrekking,
        location:"Bwindi Impenetrable Forest, Rwanda & Uganda",
        heading:"6 Tips To Gorilla Trekking",
        paragraph:"To fully appreciate the majesty of the gorillas, you must approach the experience with an open heart and mind, ready to witness nature's beauty and power.",

    },
    {
        id:5,
        recent:true,
        popular:false,
        image: Zanzibar2,
        path: "/EA8places",
        location:"Zanzibar",
        heading:"8 Places You Want To Visit In East Africa",
        paragraph:"From the majestic River Nile and volcanoes, "+
        "to the wildlife-rich national parks and reserves, "+
        "to the colorful and vibrant cities of Nairobi,"+
        " Kigali, and Kampala. East Africa has something "+
        "for everyone. You can enjoy the scenic views,"+
        " the cultural diversity, and the historical heritage"+
        " of this region that is full of life and adventure",
    
    },
    {
        id:6,
        recent:true,
        popular:false,
        image: Kiso,
        path: "/westernuganda",
        location:"Kisoro",
        heading:"The Wonders of Western Uganda.",
        paragraph:"Within The Pearl of Africa, is another pearl, Western Uganda is blessed with natural beauty and cultural richness.  You can relax and enjoy the views of Lake Bunyonyi, which has lots of little islands and birds. You can also meet some of the coolest animals on the planet, the mountain gorillas, at Bwindi",
    },
    

    {
        id:7,
        recent:true,
        popular:true,
        image: Kenya,
        path: "/kenyan8places",
        location:"The Capital, Nairobi.",
        heading:"8 Places To Visit In Kenya.",
        paragraph:"If you're looking for a vacation of all vibes, Kenya has it all"+
       ". Kenya is home to "+
        "some of the most diverse and stunning landscapes, wildlife,"+
          "and it's night party life does not go unnoticed as well, in the world.",
    
    },
    
    {
        id:8,
        recent:true,
        popular:true,
        image: rwanda,
        path: "/rwanda8places",
        location:"Volcano National Park, Rwanda",
        heading:"8 Places To Visit In Rwanda.",
        paragraph:"The 'Land of a Thousand Hills' is a country full of natural beauty in many ways, and cultural richness. From the lush greenery of Nyungwe Forest to the sparkling waters of Lake Kivu, there's no shortage of stunning sights to explore.",
    },
    
    {
        id:9,
        recent:true,
        popular:true,
        image: romance,
        path: "/romanticgetaways",
        location:"Entebbe, Uganda.",
        heading:"Our Top 6 Cozy GetAways of EastAfrica.",
        paragraph:"Let's call it 'something nice'. These are the places"+
        " that have something nice about them."+
        " You can explore the beauty of nature"+
        " that will stay in your memory forever."+
        "",
    },
    {
        id:10,
        recent:true,
        popular:true,
        image: Rwenzori,
        path: "/mountainclimbingtips",
        location:"The Rwenzori Mountain, Uganda",
        heading:"6 Things You Need To Climb Mountain Rwenzori.",
        paragraph:"The ‘Mountains of the Moon’, as they are infamously known, are a wonderland of snow-capped peaks and alpine lakes. From the rich biodiversity of the lower slopes to the majestic views of the summit, there’s no limit to the adventure and beauty that await you.",
    },
    
]


export const places= [
    {
        id:"1",
        image: Kiso,
        name: "Kisoro, Western Uganda",
        description: "Beautiful Sunset View of Serengeti Park.",
        activities: [
            "WildLife Photography",
            "Game Park Visit",
            "Safari Tours",
            "Guided Tours",
        ]
    },
    {
        id:"2",
        image: Serengeti,
        name: "Serengeti Park, Tanzania",
        description: "Beautiful Sunset View of Serengeti Park.",
        activities: [
            "WildLife Photography",
            "Game Park Visit",
            "Safari Tours",
            "Guided Tours",
        ]
    },
    {
        id:"3",
        image: Kenya,
        name: "Nairobi",
        description: "Beautiful Sunset View of Serengeti Park.",
        activities: [
            "WildLife Photography",
            "Game Park Visit",
            "Safari Tours",
            "Matatu Tours",
        ]
    },
   
   
    {
        id:"4",
        image: Kili,
        name: "Mt.Kilimanjaro",
        description: "Beautiful Sunset View of Serengeti Park.",
        activities: [
            "WildLife Photography",
            "Game Park Visit",
            "Safari Tours",
            "Guided Tours",
        ]
    },
    {
        id:"5",
        image: Rwenzori,
        name: "Mt.Rwenzori, Uganda",
        description: "Beautiful Sunset View of Serengeti Park.",
        activities: [
            "Mountain Climbing",
            "Game Park Visit",
            "Safari Tours",
            "Guided Tours",
        ]
    },

    
]

export const reviews= [
    {
        id:"1",
        quote: "During our 4 days, <span class='highlight'>I only have positive things to say about Nzaino Travel Africa.</span> Our guides, Alex and Chris"+
        " were outstanding, and went above and beyond to make sure we"+
        " were happy. They even stopped in a village to buy us Jackfruit,"+
        " and even helped us settle bills at restaurants."+
        " They are the real deal. And oh yeah!, help you get insurance."+
        "",
        client: "Hashaka Alfred Jr",
    },
    {
        id:"2",
        quote: "We had an amazing time💫 with Nzaino on our Kisoro tour. The itinerary was well-planned,"+
        " the guides were knowledgeable and friendly, and the accommodation was comfortable and clean. "+
        "We saw so many beautiful places and animals, and learned a lot about the culture and history of Kisoro. "+
        "<span class='highlight'>We highly recommend Nzaino to anyone looking for a memorable and affordable travel experience in East Africa.</span> ",
        client: "Kabura Harriet",
    },
    {
        id:"3",
        quote: "Nzaino is the best travel agency we have ever used."+
        " They arranged everything for us, from accommodation to activities"+
        ". <span class='highlight'>They were always available to answer our questions and"+
        " give us tips before and during our trip</span>. They made us feel like VIPs with their personalized service and attention to detail."+
        " We loved our trip and can’t wait to book another one with Nzaino.",
        client: "Nzaba Dick",
    },
    {
        id:"4",
        quote: "Thank you Nzaino for making our dream trip come true. "+
        "<span class='highlight'>We enjoyed every moment of our tour</span>,"+
        " from the stunning scenery and wildlife to the delicious food and friendly people. "+
        "You took care of all the logistics and made sure we had a smooth and hassle-free trip."+
        " You also gave us some great suggestions for optional activities that"+
        " added to our fun and adventure. We will definitely travel with Nzaino again.",
        client: "Higenyi Morris Wabuya",
    },
]


export const team= [
    {
        id:"1",
        name:"Daniel Batekereza",
        job: "Chief Executive Officer",
    },
    {
        id:"2",
        name:"Mbabazi Winfred",
        job: "Administrator",
    },
    {
        id:"3",
        name:"Kwizera Davis Nkurunziza",
        job: "Head of Marketing",
    },
    {
        id:"4",
        name:"Daniella Kamikaze",
        job: "Head of Accounts",
    },
    {
        id:"5",
        name:"Name",
        job: "Job",
    },
    {
        id:"6",
        name:"Name",
        job: "Job",
    },
]