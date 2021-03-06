import ErrorBag from '../src/ErrorBag'

describe('ErrorBag#set', () => {
  it('sets the value and wrap it in an array', () => {
    let bag = new ErrorBag()

    bag.set('key', 'some value')

    expect(bag.get('key')).toEqual(['some value'])
  })
})

describe('ErrorBag#get', () => {
  it("returns an empty array if the key doesn't exist", () => {
    let bag = new ErrorBag()

    expect(bag.get('not existing')).toEqual([])
  })

  it('returns the value set', () => {
    let bag = new ErrorBag()

    bag.set('key', 'some value')

    expect(bag.get('key')).toEqual(['some value'])
  })
})

describe('ErrorBag#has', () => {
  it('returns true if the key has any errors', () => {
    let bag = new ErrorBag()

    bag.set('key', 'value')

    expect(bag.has('key')).toBe(true)
  })

  it("returns false if the key doesn't exists", () => {
    let bag = new ErrorBag()

    expect(bag.has('key')).toBe(false)
  })

  it("returns false if the key exists but doesn't have any messages", () => {
    let bag = new ErrorBag()

    bag.set('key', [])

    expect(bag.has('key')).toBe(false)
  })
})

describe('ErrorBag#first', () => {
  it('returns true if the key exists', () => {
    let bag = new ErrorBag()

    bag.set('key', 'some value')

    expect(bag.first('key')).toBe('some value')
  })

  it("returns undefined if there's no value", () => {
    let bag = new ErrorBag()

    expect(bag.first('key')).toBe(undefined)
  })
})

describe('ErrorBag#empty', () => {
  it('return true if there are no items', () => {
    let bag = new ErrorBag()

    bag.set('key', [])

    expect(bag.empty()).toBe(true)
  })

  it('return false if there are items', () => {
    let bag = new ErrorBag()

    bag.set('key', 'some value')
    bag.set('different key', 'some other value')

    expect(bag.empty()).toBe(false)
  })
})
