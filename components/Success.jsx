import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png?w=826&t=st=1687346465~exp=1687347065~hmac=6fb9535fed4a24a4327786fcf275f63a29d54ce12f16ae675b122676ab7c2b70" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
