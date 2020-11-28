
const apiKey="PK5OhhNxA3GgTlKxFjc2YAsyeouCAw5M";


const getImage = async ()=>{
    try {
        
        const resp =await  fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} =await  resp.json();    
        const {url} = data.images.original;       
        const img = document.createElement("img");
        img.src=url;
        document.body.append(img);
        
    } catch (error) {
    // error
    }

}

getImage();
