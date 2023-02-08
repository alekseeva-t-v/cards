import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card img={<img src='test.jpg' className='card-img-top' alt='#'/>}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
      </Card>

      <Card>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">Width supporting text bellow as a natural Lead-in to additional content</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Card>
    </div>
  );
}

export default App;
