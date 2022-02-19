import './App.css';
import UpdateNode from './components/testing/fitts_nodes';
import { initialElements } from './components/testing/initialElements';

function App() {
  return (
    <div >
      <UpdateNode initialElements={initialElements}/>
    </div>
  );
}

export default App;
