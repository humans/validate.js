interface Bag {
  items: object
  set(key: string, value: any): void
  get(key: string): any
  has(key: string): Boolean
  first(key: string): any
  empty(): Boolean
}

export default Bag