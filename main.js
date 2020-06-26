let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random())      
    },
    toString: function() {
        let text = ""
        if (this.state === 1) {
               stateText = "Heads"
               return stateText
           }
        else {
               stateText = "Tails"
               return stateText
           }
           
    },
    toHTML: function() {
        let image = document.createElement('img');
       
        if (this.state === 1){
            image.src = 'heads.jpg'
            image.id = '#heads'
                image.append('Heads')
                let currentImg = document.getElementById('#heads')
                document.body.append(image, currentImg)
           }
        if (this.state === 0){
            image.src = 'tails.png'
            image.id = '#tails'
               image.append('Tails')
               let currentImg = document.getElementById('#tails')
               document.body.append(image, currentImg)
        }
        
        return image;
    }
};

function display20Flips (times){
    times = 20
   for(let counter = 0; counter < times; counter += 1){
       coin.flip()
       coin.toString()
       let text = document.createElement('h3')
       text.append(stateText)
       document.body.append(text)
       
   }
}

function display20Images (times){
     times = 20
    for(let counter = 0; counter < times; counter += 1){
        coin.flip()
        coin.toString()
        coin.toHTML()
    }
}