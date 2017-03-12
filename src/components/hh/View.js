// Use hypercscript + hyperscript-helpers
import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'
const { div } = hh(h)
import { Counter, Header, Textbox } from '../../components'

const View = ({ count, subtitle, title }) =>
  div('.counter-demo', [
    Header({ title, subtitle }),
    Counter({ count }),
    Textbox({
      id: 'edit-subtitle',
      label: 'Edit subtitle',
      placeholder: subtitle || 'Enter new subtitle here',
    }),
  ])

export default View
