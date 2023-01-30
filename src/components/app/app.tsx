import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainPage />}
      />
    </Routes>
  );
}
