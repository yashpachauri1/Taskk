import PageContent from "../components/PageContent";
import { useRouteError } from "react-router";
import MainHeader from "../components/MainHeader";
const Error = () => {

  const error = useRouteError();


  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainHeader />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;