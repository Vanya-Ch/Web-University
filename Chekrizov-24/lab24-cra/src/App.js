import { Hobby } from './components/hobby'
import faceImage from './img/face.jpg';
import './style.css';
import CenteredDiv from './components/hobby';

function App() {
  return (
    <div className="container">
      <div className="all">
        <img src={faceImage} alt="Ваня"></img>
        <h1>Чекрізов Іван</h1>
        <Hobby />
        <CenteredDiv />
      </div>
    </div>
  );
}

export default App;
