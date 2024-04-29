
import './App.css'
import FAQPage from './FAQ.jsx';
import stevensLogo from './assets/stevens-logo.png';
function App() {

  return (
    <>
      <img src={stevensLogo} className='stevens-logo' alt="stevens-logo" />
      <h1>Welcome Incoming Students!</h1>
      <h2>Here are the most common questions and answers.</h2>
      <FAQPage />
      <h2>Feel free to reach out for any additional questions!</h2>

      



      
    </>
  )
}

export default App
