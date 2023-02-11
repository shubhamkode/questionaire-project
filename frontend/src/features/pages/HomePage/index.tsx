import { Page } from "../../components";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Page>
      <div className="container mx-auto pt-24 px-2 pb-28 flex items-center justify-between flex-col space-y-24 sm:space-y-12">

        <h2 className="text-4xl text-center p-2 text-black/90">
          Are you aware of your Consumer Rights?
        </h2>

        <div className="w-full space-y-2 flex items-center flex-col py-8 px-4 sm:px-0">
          <p className="text-lg text-black/70 p-2">Know your Consumer Rights...</p>
          <Link
            className="p-2 w-full max-w-sm text-center text-lg ring-2 hover:text-white ring-sky-600 text-sky-600 rounded shadow-md duration-200 ease-in-out hover:bg-sky-600/80"
            to="/newSurvey"
          >
            Take a Survey...
          </Link>

        </div>

      </div>
    </Page>
  );
}
