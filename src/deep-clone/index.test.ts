import { describe, it, expect } from 'vitest'
import deepClone from '.'

describe('Deep Clone', () => {
  it('Should not clone functions', () => {
    const original = { name: 'John Doe', greetings: () => 'Ola!' }
    const clone = deepClone(original)

    expect(clone.greetings).toBeUndefined()
    expect(clone.name).toBe('John Doe')
  })

  it('Should clone Date objects', () => {
    const original = { date: new Date(2024, 1, 1) }
    const clone = deepClone(original)

    expect(clone.date).toEqual(original.date)
    expect(clone.date).not.toBe(original.date)
  })

  it('Should clone RegExp objects', () => {
    const original = { regex: /test/gi }
    const clone = deepClone(original)

    expect(clone.regex).toEqual(original.regex)
    expect(clone.regex).not.toBe(original.regex)
  })

  it('Should clone Map objects', () => {
    const original = new Map()
    original.set('key1', 'value1')
    original.set('key2', { nested: 'value2' })

    const clone = deepClone(original)

    expect(clone).toEqual(original)
    expect(clone.get('key2')).not.toBe(original.get('key2'))
  })

  it('Should clone Set objects', () => {
    const original = new Set()
    original.add('value1')
    original.add({ nested: 'value2' })

    const clone = deepClone(original)

    expect(clone).toEqual(original)
    // @ts-expect-error Todo: Solve types here
    clone.forEach((item, index) => {
      if (typeof item === 'object') {
        expect(item).not.toBe([...original][index])
      }
    })
  })

  it('Should clone Symbol', () => {
    const original = { sym: Symbol('test') }
    const clone = deepClone(original)

    expect(typeof clone.sym).toBe('symbol')
    expect(clone.sym.description).toBe(original.sym.description)
  })

  it('Should clone Buffer objects', () => {
    const original = Buffer.from('Hello, world!')
    const clone = deepClone(original)

    expect(clone).toEqual(original)
    expect(clone).not.toBe(original)
  })

  it('Should clone circular references', () => {
    const original = { name: 'circular' }
    // @ts-expect-error Todo: Solve types here
    original.self = original

    const clone = deepClone(original)

    expect(clone).toEqual(original)
    expect(clone.self).toBe(clone)
  })
})
