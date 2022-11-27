
import Cards from '../components/Cards';

import data from '../backend/Data';
import './Home.css';

import { Routes, Route, Link } from 'react-router-dom';
const Home = () => {
    return(
        
        <div className='container-fluid '>
            <h3 className='text-center mt-5 text-uppercase'>Shop page</h3>
            <div className="container py-4">
                <div className="row">
                    {data.products.map((item, index) =>{
                        return(
                            <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                            
                        )
                    })}
      
                </div>
         

<div>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
<li>
<Link to="/blog">Blog</Link>
</li>
</ul>
<div className="main-route-place">
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</div>
<div>
<h2>Home</h2>
</div>
<div>
<h2>About</h2>
</div>
<div>
<h2>Blog</h2>
</div>

</div>

             
            </div>
        </div>
    )
}
export default Home