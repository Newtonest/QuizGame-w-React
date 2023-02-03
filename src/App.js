import './App.css';
import { MyRoutes } from './routes';
import { Acces } from './pages/providers/acces';
import Provider from './provider';
function App() {
  return (
        <Provider>
          <MyRoutes></MyRoutes>
        </Provider>
  
  );
}

export default App;
