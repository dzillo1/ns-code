import { describe, it, expect } from 'vitest'
import { getPricingForPeople } from '../src/config/pricing'
import { formatCurrency } from '../src/utils/format'

describe('pricing config', () => {
  it('returns correct pricing for one person', () => {
    const p = getPricingForPeople('one')
    expect(p.planPrice).toBe(349.99)
    expect(p.numberWeeks).toBe(4)
  })

  it('returns correct pricing for two people', () => {
    const p = getPricingForPeople('two')
    expect(p.planPrice).toBe(314.49)
    expect(p.numberWeeks).toBe(2)
  })
})

describe('format util', () => {
  it('formats currency as USD', () => {
    expect(formatCurrency(314.49)).toContain('314')
  })
})
