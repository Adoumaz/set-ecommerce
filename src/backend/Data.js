import imgOne from './images/1.jpg';
import imgTwo from './images/images.jpg'
import imgThree from './images/3.jpg';
import imgFour from './images/4.jpg';
const data = {

    products:[
        {
          id: 1,
          title:'Product One',
          img:imgOne,
          desc: 'Product for You',
          price: 80,


        },
        {
            id: 2,
            img:imgTwo,
            title:'Product Two',
            
            desc: 'Product for You',
            price: 85,
  
  
          },
          {
            id: 3,
            title:'Product Three',
            img:imgThree,
            desc: 'Product for You',
            price: 65,
  
  
          },
          {
            id: 4,
            img:imgFour,
            title:'Product Four',
            desc: 'Product for You',
            price: 70,
  
  
          },
    ]
}
export default data;