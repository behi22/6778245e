import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';
import ChangeButton from './components/changeButton';
import Footer from './components/footer';

import useCalls from './assets/api/useCalls';

const App = () => {
  const { calls, fetchCalls, archiveAll, unarchiveAll, resetCalls, loading } =
    useCalls();
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    fetchCalls();
  }, []);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleArchiveAll = async () => {
    if (activeTab === '1') {
      await archiveAll();
    }
  };

  const handleUnarchiveAll = async () => {
    if (activeTab === '2') {
      await unarchiveAll();
    }
  };

  const handleResetCalls = async () => {
    await resetCalls();
    fetchCalls();
  };

  const activityItems = calls.filter((call) => !call.is_archived);
  const archiveItems = calls.filter((call) => call.is_archived);

  return (
    <div className="container">
      <Header />
      <Nav activeTab={activeTab} onChange={handleTabChange} />
      <ChangeButton
        activeTab={activeTab}
        onArchiveAll={handleArchiveAll}
        onUnarchiveAll={handleUnarchiveAll}
      />
      <Content
        activeTab={activeTab}
        activityItems={activityItems}
        archiveItems={archiveItems}
        loading={loading}
        onResetCalls={handleResetCalls}
        onArchiveAll={handleArchiveAll}
        onUnarchiveAll={handleUnarchiveAll}
      />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;
