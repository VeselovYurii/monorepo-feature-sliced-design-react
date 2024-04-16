// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';


import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className='flex-1'>
      <NxWelcome title="creation" />
    </div>
  );
}

export default App;
