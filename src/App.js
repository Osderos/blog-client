import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer";

import styled from "styled-components";
import { device } from "./utils/device";

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
  font-family: "Akshar", sans-serif;
  color: white;
  padding: 20px;
  min-height: 100%;
  position: relative;
  padding-bottom: 20px;

  @media ${device.laptop} {
  }
`;

export default App;
