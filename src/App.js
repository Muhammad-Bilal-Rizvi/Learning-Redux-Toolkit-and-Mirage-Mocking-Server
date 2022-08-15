import logo from './logo.svg';
import './App.css';
import { Todos } from './components/Todo';
import MirageServer from './mirage/server';

MirageServer();

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////

//    Develop a React Component with Mirage Document Link
//    https://miragejs.com/quickstarts/react/develop-a-component/
//    Commands to Install Mirage
//  	npx create-react-app session_25e
//  	cd session_25e
//  	npm install --save-dev miragejs
//  	yarn add --dev miragejs
