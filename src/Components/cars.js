import vanside from '../Images/van.jpg'




export const availablecars = [
    {
        id: "1",
        carimage: vanside,
        carname: "Toyota Van",
        availability: "Available",
        carpeople: "2-10",
        milegae:"200 miles",
        system: "Automatic",
        conditioning: "AC",
        fuelcapacity: "140L",
        
        highlight1:"Free Cancellation",
        highlight2:"Instant Confirmation",
        highlight3:"Car Tracker",
        highlight4:"Free Cancellation",

        badhighlight1:"Damage Waiver",

        percentageoff: "16%",
        previousprice: "$125",
        price: "$85",
        rate: "per day",
    },
    {
        id: "2",
        carimage: vanside,
        carname: "Mitsubish Van",
        availability: "Being Used",
        carpeople: "2-10",
        milegae:"600 miles",
        system: "Automatic",
        conditioning: "AC",
        fuelcapacity: "200L",
        
        highlight1:"Free Cancellation",
        highlight2:"Instant Confirmation",
        highlight3:"Car Tracker",
        highlight4:"Free Cancellation",

        badhighlight1:"Damage Waiver",

        percentageoff: "20%",
        previousprice: "$135",
        price: "$105",
        rate: "per day",
    },
    {
        id: "",
        carimage: vanside,
        carname: "Superior Van",
        availability: "Available",
        carpeople: "2-8",
        milegae:"1200 miles",
        system: "Manual",
        conditioning: "AC",
        fuelcapacity: "130L",
        
        highlight1:"Free Cancellation",
        highlight2:"Instant Confirmation",
        highlight3:"Car Tracker",
        highlight4:"Free Cancellation",

        badhighlight1:"Damage Waiver",

        percentageoff: "18%",
        previousprice: "$105",
        price: "$75",
        rate: "per day",
    },
    {
        id: "4",
        carimage: vanside,
        carname: "Land Rover",
        availability: "Available",
        carpeople: "2-8",
        milegae:"500 miles",
        system: "Automatic",
        conditioning: "AC",
        fuelcapacity: "250L",
        
        highlight1:"Free Cancellation",
        highlight2:"Instant Confirmation",
        highlight3:"Car Tracker",
        highlight4:"Free Cancellation",

        badhighlight1:"Damage Waiver",

        percentageoff: "18%",
        previousprice: "$205",
        price: "$155",
        rate: "per day",
    }
]


export const inputs=[
    {
        id:1,
        name:"driversName",
        type:"text",
        placeholder:"Enter your full name",
        errorMessage:"Please space out your names",
        helpfulInfo:"",
        label:"Drivers Name",
        pattern:"^[A-Za-z]+ [A-Za-z]+$",
        required:true,
    },
    {
        id:2,
        name:"email",
        type:"email",
        placeholder:"Enter your email address",
        errorMessage:"Provide a valid email address",
        helpfulInfo:"Invoice will be sent to this email address",
        label:"Email Address",
        required:true,
    },
    {
        id:3,
        name:"phonenumber",
        type:"numbers",
        placeholder:"Enter your Phone Number",
        errorMessage:"Provide a valid phone number",
        helpfulInfo:"",
        label:"Phone Number",
        //pattern:"(\\+\\d{1,3})?\\d{9,}",
        pattern:"^(\\+[1-9]\\d{9,14}|0\\d{9,14})$",
        required:true,
    },
    {
        id:4,
        name:"pickupdate",
        type:"date",
        //placeholder:"Enter your Phone Number",
        errorMessage:"Please provide a date to get the car",
        helpfulInfo:"",
        label:"Pick-up Date",
        required:true,
        //min:'new Date().toISOString().split('T')[0]',
    },
    {
        id:5,
        name:"returndate",
        type:"date",
        placeholder:"year-month-day",
        errorMessage:"Please provide a date to return the car",
        helpfulInfo:"",
        label:"Return Date",
        //pattern:'',
        required:true,
    },
    {
        id:6,
        name:"driver",
        type:"checkbox",
        //placeholder:"year-month-day",
        //errorMessage:"Please provide a date to return the car",
        helpfulInfo:"Driver is optional",
        label:"Do you want a driver with the car ?",
        //pattern:'',
        //required:true,
    }
]