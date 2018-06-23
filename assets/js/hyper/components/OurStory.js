import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="our-story">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking Is The Art Of Adjustment</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eaque vel temporibus asperiores laborum repellat ipsa ullam at explicabo repudiandae!</p>
            <div class="quote">"The best Steakhouse in town." - <strong>Loyal Customer</strong></div>
            <a href="#" class="reserve-button">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-image">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
