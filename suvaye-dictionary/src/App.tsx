import Header from "./components/Header"
import Footer from "./components/Footer"
import SearchResultSection from './components/SearchResultSection';
import SearchResultContextProvider from "./store/contexts/SearchResultContext";
function App() {

  return (
   <SearchResultContextProvider>
   <Header/>
   <SearchResultSection/>
   <Footer/>
   </SearchResultContextProvider>
  )
}

export default App
