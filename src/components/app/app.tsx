import {Route, Routes} from 'react-router-dom';
import {LoadingStatus} from '../../const/const';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import MainPage from '../../pages/main-page/main-page';
import {getTasksLoadingStatus} from '../../store/app-process/selectors';

export default function App(): JSX.Element {
  const tasksLoadingStatus = useAppSelector(getTasksLoadingStatus);

  if (tasksLoadingStatus === LoadingStatus.Idle || tasksLoadingStatus === LoadingStatus.Pending) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
}
