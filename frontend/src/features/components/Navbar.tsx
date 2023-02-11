import { Link } from "react-router-dom";

export default function Navbar() {
  return <div className="w-screen bg-black/90 shadow-b-sm text-slate-200">
    <div className="container mx-auto px-2 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl p-2 leading-7">Consumer Awarness</Link>
    </div>
  </div>
}
