import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './breadcrumb.css'
const BreadcrumbComponent = () => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    const [fragments,setFragments] = useState([]);
    const {location} = useHistory();
    useEffect(() => {
        console.log(location.pathname.split('/').filter(frag => frag !== ''));
        setFragments(location.pathname.split('/').filter(frag => frag !== ''));
    },[location])
    function generateLink(index){
        console.log(fragments);
        let link = '';
        for (let i = 0; i <= index; i++) {
            link += '/' + fragments[i]
        };
        console.log(link);
        return link;
    }
    return ( <div className='breadcrumb'>
        <ion-icon name="home-outline"></ion-icon>
        {fragments.map((frag, idx) => 
        <Link className='fragment' key={idx} to={`${frag !== 'dashboard' ? generateLink(idx) : '/dashboard'}`}>{capitalizeFirstLetter(frag)}</Link>)}
    </div> );
}

export default BreadcrumbComponent;