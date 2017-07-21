
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Public route
app.get('/api/deals/public', function (req, res){
  
  let deals = [
  {
    id: 111,
    name: 'Redmi 4A (Gold, 16GB+Expandable Memory)',
    image: '1.jpg',
    description: 'The Playstation 4 is the next gen console to own. With the best games and online experience.The next generation of smartphones are going to be context-aware, taking advantage of the growing availability of embedded physical sensors and data exchange abilities.',
    originalPrice: 399.99
   
  },
  {
    id: 112,
    name: 'Micromax Canvas Fire 5 Q386 (Champagne)',
    image: '2.jpg',
    description: 'The Note 7 has been fixed and will no longer explode. Get it an amazing price!.The next generation of smartphones are going to be context-aware, taking advantage of the growing availability of embedded physical sensors and data exchange abilities.',
    originalPrice: 899.99
   
  },
  {
    id: 311,
    name: 'OnePlus 5 (Slate Gray 6GB RAM + 64GB memory)',
    image: '3.jpg',
    description: 'The Macbook Pro is the de-facto standard for best in breed mobile computing.The next generation of smartphones are going to be context-aware, taking advantage of the growing availability of embedded physical sensors and data exchange abilities.',
    originalPrice: 2199.99
   
  },
  {
    id: 141,
    name: 'Samsung Galaxy On8 (Gold)',
    image: '4.jpg',
    description: 'Turn your home into a smart home with Amazon Echo. Just say the word and Echo will do it.The next generation of smartphones are going to be context-aware, taking advantage of the growing availability of embedded physical sensors and data exchange abilities.',
    originalPrice: 179.99

  },
  {
    id: 151,
    name: 'Intex Elyt E7 (32 GB, Champagne)',
    image: '5.jpg',
    description: 'The Nest Outdoor camera records and keeps track of events outside your home 24/7.The next generation of smartphones are going to be context-aware, taking advantage of the growing availability of embedded physical sensors and data exchange abilities.',
    originalPrice: 199.99
  
  },
  {
    id: 611,
    name: 'InFocus Bingo 10 M415 (White, 8GB)',
    image: '6.jpg',
    description: 'Record yourself in first person 24/7 with the GoPro 4. Show everyone how exciting your life is.The next generation of smartphones are going to be context-aware, taking advantage of the growing availability of embedded physical sensors and data exchange abilities.',
    originalPrice: 299.99
  
  }
  ];
  res.json(deals);
})



app.listen(3001,function(){
    console.log('Serving deals on localhost:3001');
});
