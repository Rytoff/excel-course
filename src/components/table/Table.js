import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'

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
  onMousedown(e) {
    // console.log('mousedown', e.target.getAttribute('data-resize'))
    if (e.target.dataset.resize) {
      console.log('Start Resizing', e.target.dataset.resize)
    }
  }
  // onMousemove() {
  //   console.log('mousemove')
  // }
  // onMouseup() {
  //   console.log('mouseup')
  // }
}
