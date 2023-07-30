import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Triangle
      ariaLabel='loader'
      color='##f98d07'
      height={80}
      width={80}
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        alignSelf: 'center',
        stroke: '#f98d07',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Loader;
