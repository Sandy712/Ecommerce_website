import React from 'react';
import logo from './images/img2.jpg';

const Companies = () => {
  return (
    <div>
      <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img src={logo} alt="" className="offer-img"/>
                    </div>
                    <div className="col-2 content">
                        <p>exclusively available on redstore</p>
                        <h1>smart band 4</h1>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolores quam impedit
                            obcaecati adipisci aspernatur earum, neque sunt eos nulla!</small>
                        <a href="/" className="btn">Buy Now! &#8594;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Companies
