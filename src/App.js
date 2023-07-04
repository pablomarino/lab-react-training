import './App.css';
import IdCard from './components/IdCard';


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
    </div>
  );
}

export default App;
