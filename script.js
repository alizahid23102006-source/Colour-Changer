console.log("Hello World")

let backgroundColorChanger = ["#FF0000","#DC143C","#FF2400","#E0115F","#800000","#800020","#FFC0CB","#FF007F","#FF00FF","#FF7F50","#FA8072","#0000FF","#000080","#4169E1","#87CEEB","#007FFF", "#4B0082", "#00FFFF", "#008080", "#40E0D0", "#7FFFD4", "#007BA7", "#0F52BA", "#008000", "#00FF00", "#50C878", "#808000", "#98FF98", "#228B22","#BCB88A", "#00A86B", "#7FFF00", "#C3B091", "#FFFF00", "#FFD700", "#FFF700", "#FFDB58", "#FFBF00", "#FFA500", "#F28500", "#FFE5B4", "#FBCEB1", "#CD7F32", "#800080", "#EE82EE", "#E6E6FA", "#DDA0DD", "#E0B0FF", "#C8A2C8", "#9966CC", "#DA70D6", "#A52A2A", "#7B3F00", "#F5F5DC", "#D2B48C", "#704214", "#C04000", "#FFFFF0", "#FFFDD0", "#FFFFFF", "#808080", "#C0C0C0", "#36454F", "#4f5746", "#556B2F","#6B8E23"]

const heading = document.getElementById("h4");

function bgChange() {

    let randomColor = backgroundColorChanger[Math.floor(Math.random() * backgroundColorChanger.length)];

    document.body.style.backgroundColor = randomColor;
    
    heading.textContent = `background color ${ randomColor}`;
    
    // console.log(backgroundColorChanger.length)
    // document.body.style.backgroundColor =  `red`;
}