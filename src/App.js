import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import NotAvailable from './components/NotAvailable';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import FaceBook from './components/FaceBook';
import NumbersTable from './components/NumbersTable';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

const users = [
                  {
                  lastName:'Doe',
                  firstName:'John',
                  gender: 'male',
                  height: 1.82,
                  birth: new Date("1990-09-04")},

                  {
                    lastName:'Doe',
                    firstName:'Jane',
                    gender: 'female',
                    height: 1.85,
                    birth: new Date("1978-02-23")},

                  {
                    lastName:'Doe',
                    firstName:'Jane',
                    gender: 'female',
                    height: 1.75,
                    birth: new Date("1985-12-04")},
              ];


function App() {
  return (
    <div className="App">
      <h1>lab-react-training </h1>
      <h3>Iteration 1 | Component: IdCard</h3>
      {users.map((item, index)=>{
        return <IdCard key={index} lastName={item.firstName} firstName={item.lastName} gender={item.gender} height={item.height} birth={item.birth} picture={`https://randomuser.me/api/portraits/${item.gender==="male"?"men":"women"}/${Math.round(Math.random()*100)}.jpg`}></IdCard>
      })}
      <h3>Iteration 2 | Component: Greetings</h3>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="00">unknown language</Greetings>
      <h3>Iteration 3 | Component: Random</h3>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h3>Iteration 4 | Component: BoxColor</h3>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h3>Iteration 5 | Component: CreditCard</h3>
      <NotAvailable/>
      <h3>Iteration 6 | Component: Rating</h3>
      <NotAvailable/>
      <h3>Iteration 7 | Component: DriverCard</h3>
      <NotAvailable/>
      <h3>Iteration 8 | State: LikeButton</h3>
      <LikeButton/><LikeButton/>
      <h3>Iteration 9 | State: ClickablePicture</h3>
      <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png' />
      <h3>Iteration 10 | State: Dice</h3>
      <NotAvailable/>
      <h3>Iteration 11 | Component: Carousel</h3>
      <NotAvailable/>
      <h3>Iteration 12 | List and Keys | NumbersTable</h3>
      <NumbersTable limit={12} />
      <NumbersTable limit={18} />
      <h3>Iteration 13 | List and Keys - FaceBook (Simple)</h3>
      <FaceBook/>
      <h3>Iteration 14 | List and Keys - FaceBook (Advanced)</h3>
      <NotAvailable/>
      <h3>Iteration 15 | Form - SignupPage</h3>
      <NotAvailable/>
      <h3>Iteration 16 | Lifting State Up - RGBColorPicker</h3>
      <NotAvailable/>
    </div>
  );
}

export default App;
