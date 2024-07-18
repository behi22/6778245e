import React from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;
