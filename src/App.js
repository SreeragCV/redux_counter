import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {

  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {isAuth && <UserProfile/>}
      {!isAuth && <Auth/>}
      <Counter />;
    </>
  );
}

export default App;
