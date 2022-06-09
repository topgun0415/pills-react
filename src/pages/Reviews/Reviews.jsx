/** @format */

import React, { useState } from 'react';
import MainNav from '../../components/Main-Chris/MainNav/MainNav';
import ReviewIntro from '../../components/Reviews-Philipuuu/ReviewsIntro/ReviewIntro';
import '../Reviews/Reviews.css';

const Reviews = () => {
  const [user, setUser] = useState([
    {
      id: 0,
      name: '김**',
      date: '2022.05.10',
      membership: 3,
      product: ['오메가3', '칼슘 마그네슘', '밀크씨슬', '비타민B', '비타민C'],
    },
    {
      id: 1,
      name: '박**',
      date: '2021.12.10',
      membership: 1,
      product: ['밀크씨슬', '비타민B', '비타민C'],
    },
    {
      id: 2,
      name: '이**',
      date: '2022.03.09',
      membership: 9,
      product: ['비타민C', '발효효소 베이직', '코엔자임Q10'],
    },
  ]);

  return (
    <div className='Reviews'>
      <MainNav />
      <ReviewIntro />
    </div>
  );
};

export default Reviews;
