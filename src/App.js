import React,{Component} from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// import HornedBeast from './component/HornedBeast';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
        {/* <HornedBeast /> */}
      </>
    );
  }
}

export default App;
