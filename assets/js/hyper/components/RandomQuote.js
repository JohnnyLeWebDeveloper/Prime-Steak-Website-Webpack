import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="random-quote">
      <div class="container">
        <h1>Simple ingredients prepared in a simple way - that's the best way to take your everyday cooking to a higher level.</h1>
        <span class="author">- Chef Rachael Lindsay -</span>
      </div>
    </section>
  )
}
