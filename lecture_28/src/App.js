import FetchComponent from './components/AsyncComponents/AsyncComponents';
import FormComponent from './components/FormComponent/FormComponent';
import FormikForm from './components/FormikForm/FormikForm';

export default function App() {
  return (
    <div className="app-container">
      <FetchComponent />
      <FormComponent />
      <FormikForm />
    </div>
  );
}
