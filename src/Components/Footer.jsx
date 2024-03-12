import { Link } from 'react-router-dom'
import '../App.css'


export default function Footer() {
  return (
    <footer className="footer">
    <div className="rights">All rights reserved Cheesecakes by Dré, LLC</div>
    <Link href="#top">Back to Top </Link>
    <div className="creator">Site Created by Mike Walsh</div>
</footer>
  )
}
