import Validator from '../src/Validator'

class CustomExtension {}

class WithArgumentsExtension {
  first: any
  second: any

  constructor(first: any, second: any) {
    this.first = first
    this.second = second
  }
}

describe('Validator', () => {
  beforeEach(() => {
    Validator.extend('custom', CustomExtension)
  })

  it('expands a rule set string to an array of rule instances', () => {
    class AboveEighteenYearsOld {
      passes(attribute: string, value: any) {
        return value >= 18
      }
    }

    const validator = new Validator({
      name: 'custom',
      email: ['custom'],
      age: AboveEighteenYearsOld
    })

    expect(validator.getRules()).toEqual({
      name: [new CustomExtension()],
      email: [new CustomExtension()],
      age: [new AboveEighteenYearsOld()]
    })
  })

  it("passes in the arguments to the rule's constructor", () => {
    Validator.extend('withArgument', WithArgumentsExtension)

    const validator = new Validator({
      name: 'withArgument:8,string-value'
    })

    expect(validator.rules.name[0].first).toBe(8)
    expect(validator.rules.name[0].second).toBe('string-value')
  })

  it('validates the data', () => {
    const validator = new Validator({
      name: 'required',
      email: 'required'
    })

    const passes = validator.passes({
      name: 'some name',
      email: null,
      bio: 'some bio'
    })

    expect(passes).toBe(false)
    expect(validator.errors.items).toEqual({
      bio: [],
      email: ['The email field must be required.'],
      name: []
    })
  })
})
