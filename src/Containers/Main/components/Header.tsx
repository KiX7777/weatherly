import ModePicker from './ModePicker';
import UnitPicker from './UnitPicker';
import { observer } from 'mobx-react';
import { useRootStore } from '../../../Stores/StoreProvider';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react';

const Header = observer(() => {
  const store = useRootStore().mainStore;
  const [dark, setdark] = useState(localStorage.theme === 'dark');

  const handleDark = () => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setdark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setdark(true);
    }
  };

  return (
    <header className='flex justify-between order-2 md:-order-none items-center'>
      <ModePicker mode={store.mode} setMode={store.setMode} />
      <DarkModeSwitch
        checked={dark}
        onChange={handleDark}
        className='ml-auto mr-5'
      />
      <UnitPicker unit={store.unit} setUnit={store.setUnit} />
    </header>
  );
});

export default Header;
