import TestHookUseContext from './hooks/useContext/useContext'
import TestHookUseState from './hooks/useState/useState'
import TestHookUseEffect from './hooks/useEffect/useEffect';
import TestHookUseRef from './hooks/useRef/useRef';
import TestHookUseCallback from './hooks/useCallback/useCallback';
import TestHookUseReducer from './hooks/useReducer/useReducer';

import Life from './LifeCycle/Life';

function App() {
  return (
    <div className="App">
      {/* <TestHookUseContext /> */}
      {/* <TestHookUseState /> */}
      {/* <TestHookUseEffect />  */}
      {/* <TestHookUseRef /> */}
      {/* <TestHookUseCallback /> */}
      {/* <Life /> */}
      <TestHookUseReducer />
    </div>
  );
}
export default App;