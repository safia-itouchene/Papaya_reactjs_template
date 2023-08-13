import '../styles/Card.css';
import {Link} from 'react-router-dom';
export default function Card({img , title}) {
    
  return (
  
    <div className="card">
        <div className="card-img">
           <img src={img}/>
        </div>
          <div className="card-description">
              <div className="card-title">
                <Link>
                    <img src={img}/>
                </Link>
                <Link>
                    <h3>{title}</h3>
                </Link>
              </div>
            <b>mediajory art </b>
            <p>7k views - 9 days</p>
        </div>
    </div>
  
  )
}


