// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/card';
import data from './data';
// import vandongvien from './components/images/vandongvien.png'
function App() {
  const cards = data.map(item=>{
    return(
    <Card 
      key={item.id}
      item={item}
      // {...item} props.openSpots
      // openSpots={item.openSpots}
      // location={item.location}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // country={item.stats.location}
      // title={item.title}
      // price={item.price}
    /> 
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
