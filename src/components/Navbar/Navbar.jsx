import LoggedBar from './LoggedBar';
import Logo from './Logo';
import { Wrapper } from './styled/Navbar.styled';

const Navbar = () => {
  // const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const isLoggedIn = true;

  return (
    <Wrapper>
      <Logo />
      {isLoggedIn && <LoggedBar />}
    </Wrapper>
  );
};

export default Navbar;
