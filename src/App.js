import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Hanpyon" animal="human" breed="Mix" />
    </div>
  );
};

render(App, document.getElementById('root'));
