import React from 'react';

export default function SignIn() {
   return (
      <form action="/authenticate" method="POST">
         <fieldset>
            <label for="email">E-mail</label>
            <input
               id="email"
               name="email"
               type="email"
               inputMode="email"
               autoComplete="username"
            />
         </fieldset>
         <fieldset>
            <label for="password">Senha</label>
            <input
               type="password"
               name="password"
               id="password"
               autoComplete="current-password"
            />
         </fieldset>
         <button type="submit">Entrar</button>
      </form>
   )
}