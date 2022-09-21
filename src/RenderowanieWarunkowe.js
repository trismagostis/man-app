import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function RenderowanieWarunkowe(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  export default RenderowanieWarunkowe