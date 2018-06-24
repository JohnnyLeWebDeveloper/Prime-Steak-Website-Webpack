import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (<section id="special-menu">
    <div class="container">
      <h5 class="special-menu-title">Special Menu</h5>
      <h2>Delicious Flavors</h2>
      <div class="row boxes">
        <div class="col-md-4">
          <div class="box">
            <div class="box-image">
              <div class="price-circle">$25</div>
            </div>
            <span class="title">Super BBQ Grill</span>
            <p class="food-details">Fried Eggs, Steak, Baked Potato or French Fries. Side of vegetables.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="box-image2">
              <div class="price-circle">$25</div>
            </div>
            <span class="title">Classic Burger With Fries</span>
            <p class="food-details">Our thick 'n hearty burger on a toasted bakery bun. Served with lettuce, tomato, onion and pickles. Served with classic fries.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="box-image3">
              <div class="price-circle">$25</div>
            </div>
            <span class="title">Delicious Chocolate Cake</span>
            <p class="food-details">A variety of assorted desserts are available for the sweet tooth.</p>
          </div>
        </div>
      </div>
      <a href="#" class="link">View Our Full Menu</a>
    </div>
  </section>)
}
