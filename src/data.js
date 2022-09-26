import {v4 as uuidv4 } from "uuid";

function ChillHop(){
    return[
        {
            name: "Lookaway",
            artist: "ØDYSSEE, Blumen",
            cover: "https://chillhop.com/wp-content/uploads/2022/09/370fcf77d4ba59808c1109403c537e0fcc0b4edd-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color:["#cbbfa9","#2c3f6a"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=44900"

        },
        {
            name: "Pub - Remix by Flitz&Suppe",
            artist: "Flitz&Suppe",
            cover: "https://chillhop.com/wp-content/uploads/2022/07/3f5eb74c8d8e36a38baa2f71be53ea5761ed3c6d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color:["#fd4f51","#6ca898" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43784"
        },
        {
            name: "Rowing with Father - Remix ",
            artist: "Philanthrope",
            cover: "https://chillhop.com/wp-content/uploads/2022/07/3f5eb74c8d8e36a38baa2f71be53ea5761ed3c6d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color:["#fd4f51","#6ca898" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43791"
        },
        {
            name: "British Base - Remix by To",
            artist: "Toonorth",
            cover: "https://chillhop.com/wp-content/uploads/2022/07/3f5eb74c8d8e36a38baa2f71be53ea5761ed3c6d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color:["#fd4f51","#6ca898" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43787"
        },
        {
            name: "Sleep Walker",
            artist: "J.Folk",
            cover: "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color:[ "#87e8c5","#eeebc2"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43902"
        },
        {
            name: "Flight Mode",
            artist: "J.Folk",
            cover: "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color:["#87e8c5","#eeebc2" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43903"
        },
        {
            name: "Making a Way",
            artist: "The BREED",
            cover: "https://chillhop.com/wp-content/uploads/2022/07/e435a424c2a637c19d2241dea2399a4813d984b3-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#caa818","#ba402c"] ,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41956"
        },
    ];
}

export default ChillHop;