
import Footer from "./component/Footer"
import Header from "./component/Header"
import HomeItem from "./component/HomeItem"


function App() {
  const item = { id: '008',
    image: 'images/8.jpg',
    company: 'Nivea',
    item_name: 'Men Fresh Deodrant 150ml',
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        count: 5200,
    }
  }

  return (
    <>
  <Header/>
    <main>
        <div className="items-container">
          <HomeItem item={item}/>
        </div>
    </main>
    <Footer/>  </>
  )
}

export default App

