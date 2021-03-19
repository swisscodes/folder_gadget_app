import Folder from './components/folder';
import File from './components/file';
import ShowContext from './context/show-context';
import { useState } from 'react';

function App() {
  const [show, setShow ] = useState(false);
  const [folderName, setFolderName] = useState('');

  const clickHandler = (e) => {   
    setFolderName(e.target.id)
    setShow(!show)  
  }

  return (
    <div>
      <ShowContext.Provider value={
        { 
          show: show, 
          folderName: folderName,
          clicked: clickHandler 
          }
        }>       
        <Folder name="Desktop">
          <Folder name="Music">
            <File name="dogs.jpeg" />
            <File name="cats.jpeg" />
          </Folder>
        </Folder>
        <Folder name="Applications">
          <File name="ok.jpeg" />
          <File name="big.jpeg" />
        </Folder>
      </ShowContext.Provider>
    </div>
    
  );
}

export default App;
