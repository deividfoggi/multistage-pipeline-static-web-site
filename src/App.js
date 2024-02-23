import logo from './logo.svg';
import azuredevopslogo from './azure-devops-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://dev.azure.com/"
          target="_blank"
          rel="noopener noreferrer"
        >        <img src={azuredevopslogo} className="App-logo" alt="logo" />
        </a>
        <p className="App-subheader">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        The following variables have been defined during the pipeline deployment process for the specific stage/Environment:
        <p className="App-subheader">
          Environment: {process.env.REACT_APP_ENVIRONMENT}
          <br />
          Storage Account: {process.env.REACT_APP_STORAGE_ACCOUNT_NAME}
        </p>
      </header>
    </div>
  );
}

export default App;
