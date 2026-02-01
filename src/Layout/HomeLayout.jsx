import { Outlet } from "react-router";
import NavBar from "../Component/NavBar";
import Carusal from "../Component/Carusal";

const HomeLayout = () => {
  return (
    <div className="relative  ">
      <header className="w-11/12 mx-auto  ">
        <nav className="fixed z-50 top-0 right-0 left-0">
          <NavBar />
        </nav>
        <section>
          <Carusal />
        </section>
      </header>
      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;
