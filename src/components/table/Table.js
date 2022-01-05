import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor()

  toHTML() {
    return createTable()
  }
}
