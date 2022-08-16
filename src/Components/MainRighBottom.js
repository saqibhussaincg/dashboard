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
        <div className="topSeller">
            <div className="topSellerImg"></div>
            
            <p className='topSellerName'>Sample Name <span>@sample</span></p>

            <a href="#" className="button1 btn">Follow</a>
        </div>  
            })
        }

    </div>
  )
}

export default MainRighBottom