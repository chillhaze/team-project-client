import { useSelector } from 'react-redux';
import LoggedBar from './LoggedBar';
import Logo from './Logo';
import { Wrapper } from './styled/Navbar.styled';
import * as authSelectors from '../../redux/auth/auth-selectors';

const Navbar = () => {
  // const isUserLoggedIn = useSelector(({ auth }) => auth.isUserLoggedIn);
  const isUserLoggedIn = true;

  return (
    <Wrapper>
      <Logo />
      {isUserLoggedIn && <LoggedBar />}
    </Wrapper>
  );
};

export default Navbar;
