// Centralized pricing configuration and helpers
export const PRICING = {
  people: {
    one: {
      numberWeeks: 4,
      days: {
        five: {
          planPrice: 349.99,
          shipments: {
            'auto-delivery': { perShip: 349.99 },
            bogo: { perShip: 321.99, save: 56.0, numberShipments: 2 },
            prepay3: { perShip: 304.49, save: 136.50, numberShipments: 3 },
            prepay4: { perShip: 297.49, save: 209.99, numberShipments: 4 },
          },
        },
        seven: {
          planPrice: 404.99,
          shipments: {
            'auto-delivery': { perShip: 404.99 },
            bogo: { perShip: 372.59, save: 64.80, numberShipments: 2 },
            prepay3: { perShip: 352.34, save: 157.95, numberShipments: 3 },
            prepay4: { perShip: 344.24, save: 242.99, numberShipments: 4 },
          },
        },
      },
    },
    two: {
      numberWeeks: 2,
      days: {
        five: {
          planPrice: 314.49,
          shipments: {
            'auto-delivery': { perShip: 314.49 },
            bogo: { perShip: 289.33, save: 50.32, numberShipments: 2 },
            prepay3: { perShip: 273.61, save: 122.65, numberShipments: 3 },
            prepay4: { perShip: 267.32, save: 188.69, numberShipments: 4 },
          },
        },
        seven: {
          planPrice: 361.24,
          shipments: {
            'auto-delivery': { perShip: 361.24 },
            bogo: { perShip: 332.34, save: 57.80, numberShipments: 2 },
            prepay3: { perShip: 314.28, save: 140.88, numberShipments: 3 },
            prepay4: { perShip: 307.06, save: 216.74, numberShipments: 4 },
          },
        },
      },
    },
  },
  // top-level prepay summary (max possible saving across configs)
  prepay: {
    saveUpTo: 220.00,
  },
}

// Backwards-compatible helpers
export function getPricingForPeople(people = 'one') {
  return PRICING.people[people] || PRICING.people.one
}

// Return merged pricing for a combination of people, days and shipping option
export function getPricing(people = 'one', days = '5day', ship = 'auto-delivery') {
  const person = PRICING.people[people] || PRICING.people.one
  const dayKey = days && String(days).includes('7') ? 'seven' : 'five'
  const day = person.days && person.days[dayKey] ? person.days[dayKey] : null

  const basePlan = day ? day.planPrice : (person.planPrice || null)
  const baseNumberWeeks = person.numberWeeks

  // resolve shipment option
  const shipments = day && day.shipments ? day.shipments : {}
  const shipKey = ship || 'auto-delivery'
  const shipInfo = shipments[shipKey] || shipments['auto-delivery'] || { perShip: basePlan }

  return {
    planPrice: basePlan,
    pricePerShipment: shipInfo.perShip ?? basePlan,
    autoDeliveryPerShip: (shipments['auto-delivery'] && shipments['auto-delivery'].perShip) || basePlan,
    numberWeeks: baseNumberWeeks,
    // additional info for prepay/bogo
    prepay: {
      numberShipments: shipInfo.numberShipments || (shipKey === 'auto-delivery' ? 1 : null),
      save: shipInfo.save || 0,
      perShip: shipInfo.perShip || basePlan,
    },
  }
}

export function getPrepay() {
  return PRICING.prepay
}
