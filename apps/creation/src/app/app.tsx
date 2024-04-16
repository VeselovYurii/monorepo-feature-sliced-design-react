// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {Button} from  '@creation/button'



export function App() {
  return (
    <div className='flex-1'>
     <Button onClick={console.log}>Hello World</Button>
    </div>
  );
}

export default App;
