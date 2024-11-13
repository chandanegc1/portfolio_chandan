import { useEffect, useState } from "react";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Sidebar from "./Components/Sidebar/SideBar";
import TechStacks from "./Components/TechStacks";
import Loader from "./Components/Loader";
import ProgressBar from "./Components/ProgressBar";
import { fetchGistData } from "./Components/utils/api";
import Certificate from "./Components/Certificates";
import Experience from "./Components/Experience";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFun = async () => {
      try {
        const res = await fetchGistData();
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFun();
  }, []);

  if (loading) return <Loader loading={false} />;
  if (error) return <div>Error: {error}</div>;
  return (
    <main id="main">
      <div className="w-full  h-full bg-l_primary dark:bg-d_primary">
        <div className="flex relative">
          <div
            className={`${
              showMenu ? "flex" : "hidden"
            }  lg:flex h-screen fixed w-screen sm:w-[263px] z-20`}
          >
            <Sidebar socialLink={data.socialLink}  />
          </div>
          <main className="relative flex-1 pl-0 lg:pl-[263px]">
            <Header
              onToggleMenu={menuHandler}
              showMenu={showMenu}
              introduction={data.introduction}
              socialLink={data.socialLink}
            />
            <Hero introduction={data.introduction} resumeURL={data.resumeURL} />
            <div className="p-4 overflow-hidden">
              <Experience/>
              <Projects title={"Projects"} data={data.projectsData} />
              <TechStacks skills={data.skills} />
              <Certificate certificate={data.certificate} />
              <About introduction={data.introduction} />
              <Projects title={"Mini Projects"} data={data.miniProjectsData} />
            </div>
          </main>
        </div>
      </div>
      <ProgressBar />
    </main>
  );
}

export default App;
