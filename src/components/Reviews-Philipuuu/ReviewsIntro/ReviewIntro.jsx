/** @format */

import React, { useState } from 'react';
import '../ReviewsIntro/ReviewIntro.css';

const ReviewIntro = () => {
  const [userNum, setUserNum] = useState(0);

  return (
    <>
      <div className='ReviewIntro'>
        <h4>고객리뷰</h4>
        <p>
          필리를 이용해주시는 고객님들의 리얼후기 <span>{userNum + '건'}</span>
          을 확인하세요!
        </p>
      </div>
    </>
  );
};

export default ReviewIntro;
