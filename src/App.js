import Card from './components/Card';

/**
 * Основной компонент приложения, отвечающий за отображение всех элементов на странице. Дочерниq компонент Card (блок отображения карточки)
 *
 */
function App() {
  return (
    <div className="App">
      <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." href="!#">
        <img src='test.jpg' className='card-img-top' alt='#'/>
      </Card>

      <Card  title="Special title treatment" text="Width supporting text bellow as a natural Lead-in to additional content" href="!#">
      </Card>
    </div>
  );
}

export default App;
