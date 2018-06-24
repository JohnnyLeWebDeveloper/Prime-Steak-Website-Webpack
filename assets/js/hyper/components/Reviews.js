import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="side-image">
            <img src="#" alt="Chef Image" />
            </div>
          </div>
          <div class="col-md-4">
            <h5 class="food-details">REVIEWS</h5>
            <h2 class="food-network">The Food Network</h2>
            <h4>Best restaurant in Atlanta!</h4>
            <p class="review-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ex pariatur necessitatibus labore ab, fugiat sint quo eveniet aliquam eaque!</p>
            <div class="author"><strong>John William</strong> - Winner of the 2018 James Beard Award Chef -</div>
            <div class="arrows">
              <i class="fas fa-arrow-left"></i>
              <i class="fas fa-arrow-right ready"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
