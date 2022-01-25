import { storage } from '../core/utils'

function toHTML(key) {
  console.log('key toHTML', key)
  const model = storage(key)
  console.log('model', model)
  const id = key.split(':')[1]
  console.log('id', id)
  return `
  <li class="db__record">
    <a href="#excel/${id}">${model.title}</a>
    <strong>24.12.2021</strong>
  </li>
  `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()

  if (!keys.length) {
    return `<p>You didn't create any Table yet</p>`
  }

  return `
    <div class="db__list-header">
      <span>Name:</span>
      <span>Opened:</span>
    </div>
    <ul class="db__list">
        ${keys.map(toHTML).join('')}
    </ul>
  `
}
