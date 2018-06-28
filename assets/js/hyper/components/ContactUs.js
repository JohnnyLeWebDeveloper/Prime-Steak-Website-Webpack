import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (<section id="contact-us">
    <div class="container">
      <h5 class="comp-title">Contact Us</h5>
      <h2>Delicious Flavors</h2>
      <div class="box">
        <div class="row">
          <div class="col-md-6 address-height">
            <div class="city">{state.globalState.companyInfo.city}</div>
            <h6 class="address">{state.globalState.companyInfo.address}</h6>
            <p>
              <strong>Email:</strong>{state.globalState.companyInfo.email}</p>
          </div>
          <div class="col-md-6">
            <h6>Phone:</h6>
            <div class="city">{state.globalState.companyInfo.phone}</div>
            <h6>Lunch Service:</h6>
            <p>{state.globalState.companyInfo.lunch}
              <br/>
              {state.globalState.companyInfo.lunchHours}</p>
            <h6>Dinner Service:</h6>
            <p>{state.globalState.companyInfo.dinner}
              <br/>
              {state.globalState.companyInfo.dinnerHours}</p>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
