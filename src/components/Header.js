import '../styles/Header.css'
export default function Header() {
  return (
    <div className='header'>
         <ul>
            <li><a>All</a></li>
            <li><a>Gaming</a></li>
            <li><a>Anime</a></li>
            <li><a>Movies</a></li>
            <li className='active'><a>Mix</a></li>
            <li><a>Music</a></li>
            <li><a>Kpop</a></li>
            <li><a>Pop</a></li>
            <li><a>Kdrama</a></li>
            <li><a>News</a></li>
         </ul>
    </div>
  )
}


