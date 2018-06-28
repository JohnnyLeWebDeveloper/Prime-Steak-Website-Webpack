import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (<section id="random-quote">
    <div class="container">
      <h1>{state.globalState.quote.mainQuote}</h1>
      <span class="author">{state.globalState.quote.chef}</span>
    </div>
  </section>)
}
