import { useSelector } from 'react-redux';
import LoggedBar from './LoggedBar';
import Logo from './Logo';
import { Wrapper } from './styled/Navbar.styled';

const Navbar = () => {
  const isUserLoggedIn = useSelector(({ auth }) => auth.isUserLoggedIn);

  return (
    <Wrapper>
      <Logo />
      {isUserLoggedIn && <LoggedBar />}
    </Wrapper>
  );
};

export default Navbar;
