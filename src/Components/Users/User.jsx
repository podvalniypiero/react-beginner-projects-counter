import React from 'react';

export const User = ({id,name,surname,email,avatar}) => (
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />
      <div>
        <h3>{name} {surname}</h3>
        <p>
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
          </svg>
          {email}
        </p>
      </div>
    </div>
    <img className="action" src="https://cdn-icons-png.flaticon.com/512/1237/1237946.png?w=740&t=st=1670080027~exp=1670080627~hmac=c7b1749ae8ba73af1098ab7e38cb67713188fb73b460a78962955772205cd3df" alt="Action" />
  </li>
  //https://cdn-icons-png.flaticon.com/512/1250/1250731.png?w=740&t=st=1670080275~exp=1670080875~hmac=d03f39805afc6cda8da93f90521dec7fd81136646253698eaf66e213706c8377
);