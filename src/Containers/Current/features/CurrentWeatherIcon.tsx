import { icons } from '../../../utilities/weatherIcons';
import { AnimatePresence, motion } from 'framer-motion';

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const CurrentWeatherIcon = ({ code }: { code: number }) => {
  const icon = icons.get(code);
  return (
    <AnimatePresence>
      <motion.div
        variants={iconVariants}
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        className='w-24 lg:w-full max-w-[200px]'
      >
        <img src={`/icons/svg/${icon}.svg`} alt='' />
      </motion.div>
    </AnimatePresence>
  );
};

export default CurrentWeatherIcon;
