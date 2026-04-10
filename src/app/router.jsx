import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import InstitutePage from '../pages/Institute/InstitutePage';
import HostelPage from '../pages/Hostel/HostelPage';
import CoursesPage from '../pages/Courses/CoursesPage';
import ResultsPage from '../pages/Results/ResultsPage';
import ContactPage from '../pages/Contact/ContactPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'institute', element: <InstitutePage /> },
      { path: 'hostel', element: <HostelPage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'results', element: <ResultsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
