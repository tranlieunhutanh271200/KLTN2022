import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './breadcrumb.css'
const BreadcrumbComponent = () => {
    const [fragments,setFragments] = useState([]);
    const {location} = useHistory();
    useEffect(() => {
        console.log(location.pathname.split('/').filter(frag => frag !== ''));
        setFragments(location.pathname.split('/').filter(frag => frag !== ''));
    },[location])
    return ( <div className='breadcrumb'>
        <ion-icon name="home-outline"></ion-icon>
        {fragments.map((frag, idx) => 
        <Link className='fragment' key={idx} to={`${frag !== 'dashboard' ? frag : ''}`}>{frag}</Link>)}
    </div> );
}

export default BreadcrumbComponent;