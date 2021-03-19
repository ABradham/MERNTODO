// Document imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';


import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import ItemModal from './components/itemModal';


function App(){
  {/* Entry point of application (wrapping entire app in provider to handle state management) */}
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <TodoList />
        </Container>
        
    </div>
    </Provider>
  );
}

export default App;
