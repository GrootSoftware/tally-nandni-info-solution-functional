import logo from './logo.svg';
import './App.css';
import AppRoutes from './layouts/AppRoutes';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>

      <AppRoutes />
      <ToastContainer enableMultiContainer containerId={'TOP_RIGHT'} position={toast.POSITION.TOP_RIGHT} />

    </>
  );
}

export default App;
