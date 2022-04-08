import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Post from "./components/Post";
import { Provider } from "react-redux";
import store from "./redux/store";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/post/:id"
          element={
            <Provider store={store}>
              <Post />
            </Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
