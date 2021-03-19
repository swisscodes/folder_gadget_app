import Folder from './components/folder';
import File from './components/file';

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="dogs.jpeg" />
          <File name="cats.jpeg" />
          <File name="sing.mp3" />
        </Folder>
      </Folder>
      <Folder name="Applications">
        <File name="ok.jpeg" />
        <File name="big.png" />
      </Folder>
    </div>
    
  );
}

export default App;
