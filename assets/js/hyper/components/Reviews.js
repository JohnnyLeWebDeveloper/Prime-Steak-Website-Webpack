import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8">

          </div>
          <div class="col-md-4">
            <h5 class="food-details">REVIEWS</h5>
            <h2 class="food-network">The Food Network</h2>
            <h4>Best restaurant in Atlanta!</h4>
            <p>Hello Hello Hello</p>
            <div class="review-author"><strong>John William</strong> - Winner of the 2018 James Beard Award Chef -</div>
            <div class="arrows">
              <i class="fas fa-arrow-left"></i>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
