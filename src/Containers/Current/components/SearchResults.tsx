import SearchItem from './SearchItem';
import { SearchCoordsType } from '../../../types';
import { motion } from 'framer-motion';
import { getFlagEmoji } from '../../../utilities/emojiFlag';

const searchVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const SearchResults = ({ data }: { data: SearchCoordsType[] }) => {
  return (
    <motion.div
      variants={searchVariants}
      initial='hidden'
      animate='visible'
      className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-xl absolute top-[100%] transition-colors duration-500'
    >
      <ul className='flex   flex-col w-full z-10 '>
        {data.length === 0 && <h1>No results found</h1>}
        {data.length > 0 &&
          data.map((s) => (
            <SearchItem
              key={s.lat + s.lon}
              coords={{
                lat: s.lat,
                lon: s.lon,
              }}
            >
              <>
                <p>
                  {s.name}, {getFlagEmoji(s.country)}
                </p>
                <p className='overflow-hidden text-ellipsis'>
                  {s.state && s.state}
                </p>
              </>
            </SearchItem>
          ))}
      </ul>
    </motion.div>
  );
};

export default SearchResults;
