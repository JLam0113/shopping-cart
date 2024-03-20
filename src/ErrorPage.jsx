import Navigation from "./componenets/Navigation";

function ErrorPage ({total}) {
  return (
    <div>
      <Navigation total={total}/>
      <h1>Oh no, this page doesn't exist!</h1>
    </div>
  );
};

export default ErrorPage;
