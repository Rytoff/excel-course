const CODES = {
  A: 65,
  Z: 90,
}

function toColumn(col, idx) {
  return `
    <div class='column' data-type='resizible' data-col='${idx}'>
    ${col}
    <div class='col-resize' data-resize="col"></div>
    </div>
  `
}

function createRow(index, content) {
  const resizer = index
    ? `<div class='row-resize' data-resize="row"></div>`
    : ''
  return `
    <div class='row' data-type='resizible'>
      <div class='row-info'>
      ${index ? index : ''}
      ${resizer}
      </div>
      <div class='row-data'>${content}</div>
    </div>
  `
}

function toCell(row) {
  return function(_, col) {
    return `
    <div class='cell'
    contenteditable
    data-col="${col}"
    data-id="${row}:${col}"
    data-type="cell">
    </div>
  `
  }
}

function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('')

  rows.push(createRow(null, cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
    .fill('')
    .map(toCell(row))
    .join('')
    rows.push(createRow(row + 1, cells))
  }

  return rows.join('')
}
