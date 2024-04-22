"use client"
import React, { useState } from 'react';
import Slider from 'react-slider';

function PriceRange() {
  const [minprice, setMinprice] = useState(0);
  const[maxprice, setMaxprice]= useState(25800000);

  const handlePriceChange = (value : number) => {
    if (value > maxprice) {
      setMaxprice(value);
    }
    setMinprice(value);
  };
  const handleIncreaseChange = (value : number)=>{
    if (value >= minprice) {
      setMaxprice(value);
  } else {
      setMaxprice(minprice);
  }
  }

  return (
    <div  className="card border-0 mt-4">
       <div className="header mt-3">
       <h5 className="text-end card-header-tab fw-bold border-0 border-bottom">محدوده قیمتی </h5>
       </div>
        <div className="d-flex flex-column mx-3 mt-4"> 
        <div className="col-6 " >
        <div className="price-box">
            <label className='text-secondary'> از</label><br />
            <span id='min-price' className='ms-2'>{minprice.toLocaleString("fa-IR")}</span><br />
            <span className='toman'>تومان</span>
        </div>
        </div>
        <Slider className='slider bg-secondary-subtle'
            value={minprice}
            min={0}
            max={25800000}
            onChange={handlePriceChange}
            />
            <div className="col-6 ">
                <div className="price-box">
                    <label className='text-text-secondary'>تا </label><br />
                    <span id='max-price' className='ms-2'>{maxprice.toLocaleString("fa-IR")}</span><br />
                    <span className='toman'>تومان</span>
                </div>
            </div>
            <Slider 
            className='slider bg-bg-secondary-subtle mb-4 mt-3' 
            onChange={handleIncreaseChange}
            value={maxprice}
            max={25800000}
            min={0}
            />
                        <div className="mx-auto">
              <button className='btn btn-danger px-5 py-2 my-3 fw-bold'>جستجو کردن</button>
            </div>
        </div>
    </div>
  );
}

export default PriceRange;