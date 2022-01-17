import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { UniversalModal } from './UniversalModal';

export const ModalPortal = ({ onAction, value }) => {
  const shoudModalOpen = useSelector(state => state.confirm.shoudModalOpen);

  return ReactDOM.createPortal(
    shoudModalOpen && <UniversalModal onAction={onAction} value={value} />,
    document.getElementById('portal'),
  );
};
