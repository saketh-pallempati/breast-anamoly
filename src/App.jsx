import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';
import Header from './Header';
import ScrollButton from './ScrollButton';

function App() {
  const [selectedContent, setSelectedContent] = useState('Abstract');

  const scrollToNextPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <ScrollButton onClick={scrollToNextPage} />
      <div className='next-page'>
        <Sidebar onSelectMenu={setSelectedContent} />
        <div className='content'>
          <Content selectedContent={selectedContent} />
        </div>
      </div>
    </>
  );
}

export default App;