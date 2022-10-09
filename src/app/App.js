import './App.css';
import Header from '../common/components/Header';
import Carousel from 'common/components/Carousel';
import Course from 'features/courses/Course';
import InfoBox from 'common/components/InfoBox/InfoBox';
import Categories from 'common/components/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <InfoBox/>
      <Categories />
      <Course />
    </div>
  );
}

export default App;
