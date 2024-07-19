import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/header';
import Nav from './components/nav';
import NavContent from './components/navContent';
import ChangeButton from './components/changeButton';
import Body from './components/body';
import Footer from './components/footer';

const App = () => {
  /* temp helpful stuff */
  const [activeTab, setActiveTab] = useState('1'); // '1' for Activity, '2' for Archive
  const [activityItems, setActivityItems] = useState([
    { id: 1, text: 'Activity Item 1' },
    { id: 2, text: 'Activity Item 2' },
  ]);
  const [archiveItems, setArchiveItems] = useState([
    { id: 101, text: 'Archived Item 1' },
    { id: 102, text: 'Archived Item 2' },
  ]);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleArchiveAll = () => {
    if (activeTab === '1') {
      // Archive all activity items
      setArchiveItems([...archiveItems, ...activityItems]);
      setActivityItems([]);
    }
  };

  const handleUnarchiveAll = () => {
    if (activeTab === '2') {
      // Unarchive all archived items
      setActivityItems([...activityItems, ...archiveItems]);
      setArchiveItems([]);
    }
  };
  /* */

  return (
    <div className="container">
      <Header />
      <Nav 
        activeTab={activeTab}
        onChange={handleTabChange} 
      />
      <ChangeButton 
        activeTab={activeTab}
        onArchiveAll={handleArchiveAll}
        onUnarchiveAll={handleUnarchiveAll} 
      />
      <NavContent 
        activeTab={activeTab}
        activityItems={activityItems}
        archiveItems={archiveItems} 
      />
      <Body />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;
