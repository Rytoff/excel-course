import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { $ } from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  // onClick(event) {
  //   console.log('click', event.target)
  // }
  onMousedown(event) {
    // console.log('mousedown', e.target.getAttribute('data-resize'))
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizible"]')
      const coords = $parent.getCoords()

      document.onmousemove = (e) => {
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
  // onMousemove() {
  //   console.log('mousemove')
  // }
  // onMouseup() {
  //   console.log('mouseup')
  // }
}
