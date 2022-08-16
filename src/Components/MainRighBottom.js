import React from 'react'
import TopSeller from './TopSeller'

const MainRighBottom = () => {
  return (
    <div className='bottomRightCard'>
        <div className='bottomName'>
            <h2>Top Seller</h2>
            <a href='#'>View More</a>
        </div>

        {
            TopSeller && TopSeller.map((seller) => {
                return(
        <div className="topSeller" key={seller?.id}>
            <div className="topSellerImg">
                <img src={seller?.imgSrc} alt='image' />
            </div>
            
            <p className='topSellerName'>{seller?.seller_name} <span>{seller?.username}</span></p>

            <a href="#" className="button1 btn">Follow</a>
        </div>
            )})
        }

    </div>
  );
}

export default MainRighBottom