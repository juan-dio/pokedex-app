import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div
      id="error-page"
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="italic text-2xl text-slate-600 font-thin mb-6">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="text-sky-500 underline"
      >
        Bo Back
      </button>
    </div>
  );
}
