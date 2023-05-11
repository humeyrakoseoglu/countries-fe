import '../../style/Home/HomePage.css';
import Card from '../../components/Card/Card';
import AppBar from '../../components/AppBar/AppBar';

function Homepage() {
    return (
        <div className="HomePage">
            <AppBar/>
            <div className="main" >
                <ul className='countryList'>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                     <li><Card/></li>
                 </ul>
            </div>
        </div>
      );
    }

export default Homepage;