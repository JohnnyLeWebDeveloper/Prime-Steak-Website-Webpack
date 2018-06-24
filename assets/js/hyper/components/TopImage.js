import {h, app} from 'hyperapp'

export default function Top({state, actions}) {
  return (
    <section class="top-image">
      <div class="container">
        <div class="introduction-title">
          <h5>
            Welcome to
          </h5>
          <h1>
            Prime Steak
            <br />
            Restaurant
          </h1>
        </div>
        <div class="container">
          <div class="contact-info">
            <div class="book-reservation">Book Reservation Directly</div>
            <h2>123-123-1234</h2>
            <div class="hours-of-operation">
              Opening Hours <strong>Monday - Friday: </strong> 9AM - 11PM EST
            <strong>Saturday - Sunday: </strong> 9AM - 11PM EST
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
