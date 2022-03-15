import React from 'react';

const PageNotFound = ({location}) => {
  return (
    <div>
      <h3>"{location.pathname}" 이 페이지는 없는 페이지 입니다.</h3>
    </div>
  );
};

export default PageNotFound;