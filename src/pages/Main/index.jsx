import React from 'react';
import { Welcome } from './Welcome';
import './main.scss';
import { Bestsellers } from './Bestsellers';
import { Posts } from './Posts';
import { Comments } from './Comments';
import { LoginForm } from '../Login';

function Home() {
  return (
    <main className="homepage">
      <LoginForm />
      <Welcome />
      <Bestsellers />
      <Posts />
      <Comments />
    </main>
  );
}

export { Home };
