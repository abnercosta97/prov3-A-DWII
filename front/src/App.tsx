import Form from "./components/Form";
import Lista from "./components/Lista";
import { Provider } from "./contexts";

function App() {

  return (
    <Provider>
      <Form />
      <Lista />
    </Provider>
  );
}

export default App;
