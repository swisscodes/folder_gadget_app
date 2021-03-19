import Folder from './components/folder';
import File from './components/file';

function App() {
  return (
    <div>
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
    </div>
    
  );
}

export default App;
