import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer";

import styled from "styled-components";

function App() {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <PostContainer />
        <Footer />
      </MainContainer>
    </Provider>
  );
}

const MainContainer = styled.div`
  background-color: #343434;
`;

export default App;
