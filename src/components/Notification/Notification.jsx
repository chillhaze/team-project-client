import { Wrapper } from './Notification.styled';

const Notification = ({ message }) => {
  return <Wrapper>{message ? message : 'Notification'}</Wrapper>;
};

export default Notification;
