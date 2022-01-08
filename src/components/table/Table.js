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
      const type = $resizer.data.resize
      const prop = type === 'col' ? 'bottom' : 'right'
      let value

      $resizer.css({ opacity: 1, [prop]: '-5000px' })

      document.onmousemove = (e) => {
        if (type === 'col') {
          const delta = e.pageX - coords.right
          value = coords.width + delta
          $resizer.css({ right: -delta + 'px' })
        } else {
          const delta = e.pageY - coords.bottom
          value = coords.height + delta
          $resizer.css({ bottom: -delta + 'px' })
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        if (type === 'col') {
          $parent.css({ width: value + 'px' })
          this.$root
            .findAll(`[data-col="${$parent.data.col}"]`)
            .forEach((el) => (el.style.width = value + 'px'))
        } else {
          $parent.css({ height: value + 'px' })
        }

        $resizer.css({ opacity: 0, bottom: 0, right: 0 })
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
// 108 ms  Scripting
// 471 ms  Rendering
