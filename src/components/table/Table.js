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
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizible"]')
      const coords = $parent.getCoords()

      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = (e) => {
        console.log('move')
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
        cells.forEach((el) => (el.style.width = value + 'px'))
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
// 334 ms  Scripting
// 3069 ms  Rendering
// 300 ms  Scripting
// 2872 ms  Rendering