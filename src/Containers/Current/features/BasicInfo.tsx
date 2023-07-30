import Time from '../components/Time';
import { AnimatePresence, motion } from 'framer-motion';
import { divVariants } from '../../../utilities/framer';
import { getFlagEmoji } from '../../../utilities/emojiFlag';

const BasicInfo = ({
  temp,
  city,
  code,
}: {
  temp: number;
  city: string;
  code: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={divVariants}
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        className='flex flex-col items-center'
      >
        <p className='text-2xl dark:text-slate-100'>
          {city}, {getFlagEmoji(code)}
        </p>
        <p className='text-5xl md:text-7xl dark:text-slate-100'>
          {temp.toFixed(1)}
          &deg;
        </p>
        <Time />
      </motion.div>
    </AnimatePresence>
  );
};

export default BasicInfo;
