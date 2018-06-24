import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (<footer>
    <div class="container">
      <nav class="menu">
        <a href="#">Our Story</a>
        <a href="#">Reviews</a>
        <a href="#">Special Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Contact Us</a>
      </nav>
      <div class="social-media">
        <li>
          <a href="#" target="new">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" target="new">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" target="new">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#" target="new">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </div>
      <div class="copyright">
        Copyright &copy; 2018
      </div>
    </div>
  </footer>)
}
