import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Feedback() {
  return (
    <>
        <center>
      <form >
        <br />
        <h1>- Связаться c нами -</h1>

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
        <Button component={Link} to="/feedcomplete" >
              <font size="5" color="black" face="Impact">Отправить</font>
          </Button>
      </form>
      </center>
      <br />
    </>
  );
}
