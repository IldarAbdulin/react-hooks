import TestHookUseContext from './hooks/useContext/useContext'
import TestHookUseState from './hooks/useState/useState'
import TestHookUseEffect from './hooks/useEffect/useEffect';
import TestHookUseRef from './hooks/useRef/useRef';
import TestHookUseCallback from './hooks/useCallback/useCallback';

function App() {
  return (
    <div className="App">
      {/* <TestHookUseContext /> */}
      {/* <TestHookUseState /> */}
      {/* <TestHookUseEffect />  */}
      {/* <TestHookUseRef /> */}
      <TestHookUseCallback />
    </div>
  );
}
export default App;