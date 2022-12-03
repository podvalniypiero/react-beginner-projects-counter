import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="https://cdn-icons-png.flaticon.com/512/984/984179.png?w=740&t=st=1670080199~exp=1670080799~hmac=5a13092cf1d96a5a8a18e7d8394201a82f271fbe84078edb628231f3f3638404" alt="Success" />
      <h3>Success!</h3>
      <p>You send invitations to {count} users</p>
      <button onClick={() => window.location.reload()}  className="send-invite-btn">Back</button>
    </div>
  );
};