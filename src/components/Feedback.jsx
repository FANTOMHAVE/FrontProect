import React from 'react';

export default function Feedback() {
  return (
    <div id="block8">
        <center>
      <form action="you.html" method="POST">
        <h1>- Связаться с нами -</h1>

        <label>
          <font size="3" color="black" face="Arial">Имя</font>
        </label>
        <input type="text" name="user_name" placeholder="Имя" required />
        <br />
        
        <label>
          <font size="3" color="black" face="Arial">Фамилия</font>
        </label>
        <input type="text" name="user_surname" placeholder="Фамилия" required />
        <br />
        
        <label>
          <font size="3" color="black" face="Arial">Сообщение</font>
        </label>
        <textarea name="user_text" placeholder="Сообщение" required></textarea>
        <br />
        
        <label>
          <font size="3" color="black" face="Arial">Электронная почта</font>
        </label>
        <input type="email" name="user_email" placeholder="mail@mail.ru" required />
        <br />
        
        <button type="submit">Отправить</button>
      </form>
      </center>
    </div>
  );
}
