import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Home';
import LoadingPage from './LoadingPage'

function App() {
  const [count, setCount] = useState(0)
/*
  class LoadingPage extends
  React.Component{
    state={
      loading:true
    };

    componentDidMount(){
      setTimeout(() => {
        this.setState({ loading: false })
      }, 3000);
    }

    render(){
      if(this.state.loading){
        return <LoadingPage />
      }
*/


const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 3000);
}, []);

      /////
      return (
        <section className="w-screen h-fit">
          {loading ? (<LoadingPage />):
            (
              //main content starts

          <div className="w-screen min-h-screen relative bg-gray-900">
            
            <div className='h-[300px] w-[300px] rounded-full bg-red-500 absolute top-5 left-5 shadow-2xl shadow-red-500'></div>
            <div className='h-[300px] w-[300px] rounded-full bg-blue-500 absolute bottom-5 right-5 shadow-2xl shadow-blue-500'></div>
            <Home />
          </div>
              //main content ends

          )
        }
        </section>
      )
    }

/////
/*
}
}
*/
export default App
