import { Provider } from "react-redux";
import store from "./redux/store";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <PostContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
