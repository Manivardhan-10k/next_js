import Navbar from './components/Navbar';
import Button from './components/Button';


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My App</h1>
      <Button text="Click Me" color="darkorange" />
    </div>
  );
}