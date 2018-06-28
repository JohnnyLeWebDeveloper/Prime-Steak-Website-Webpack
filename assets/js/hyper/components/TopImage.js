import {h, app} from 'hyperapp'

export default function Top({state, actions}) {
  return (<section class="top-image">
    <div class="container">
      <div class="introduction-title">
        <h5>
          Welcome to
        </h5>
        <h1>
          {state.globalState.companyInfo.title}
        </h1>
      </div>
      <div class="container">
        <div class="contact-info flexCenter">
          <div class="hours-of-operation">
            Opening Hours<br/>
          <strong>Monday - Friday:
          </strong>
            {state.globalState.companyInfo.weekday}<br/>
          <strong>Saturday - Sunday:
            </strong>
            {state.globalState.companyInfo.weekend}
          </div>
        </div>
      </div>
    </div>
  </section>)
}
