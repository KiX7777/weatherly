import CurrentContainer from '../Containers/Main/CurrentContainer';
import MainContainer from '../Containers/Main/MainContainer';
const Layout = () => {
  return (
    <div className='shadow-xl dark:shadow-slate-800  rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-900 grid-rows-[1fr,_2fr] sm:grid-rows-1  max-w-7xl w-full gap-3 md:gap-10  grid sm:grid-cols-[minmax(300px,_30%)_1fr] transition-colors duration-500 '>
      <CurrentContainer />
      <MainContainer />
    </div>
  );
};

export default Layout;
