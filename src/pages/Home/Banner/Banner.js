import React from 'react';
import Image1 from '../../../assets/images/banner/1.jpg'
import Image2 from '../../../assets/images/banner/2.jpg'
import Image3 from '../../../assets/images/banner/3.jpg'
import Image4 from '../../../assets/images/banner/4.jpg'
import Image5 from '../../../assets/images/banner/5.jpg'
import Image6 from '../../../assets/images/banner/6.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: Image1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: Image2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: Image3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: Image4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: Image5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: Image6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem key={slide.id} slide={slide} />)
            }
        </div>
    );
};

export default Banner;