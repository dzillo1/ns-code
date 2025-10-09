export const PRICING = {
  people: {
    one: {
      numberWeeks: 4,
      days: {
        five: {
          shipments: {
            'auto-delivery': { perShip: 349.99, planPrice: 349.99 },
            bogo: { perShip: 321.99, save: 56.0, numberShipments: 2, planPrice: 699.98 },
            prepay3: { perShip: 304.49, save: 136.50, numberShipments: 3, planPrice: 1049.97 },
            prepay4: { perShip: 297.49, save: 209.99, numberShipments: 4, planPrice: 1399.96 },
          },
          prepay: {
            saveUpTo: 210.00,
          },
        },
        seven: {
          
          shipments: {
            'auto-delivery': { perShip: 404.99, planPrice: 404.99 },
            bogo: { perShip: 372.59, save: 64.80, numberShipments: 2, planPrice: 809.98 },
            prepay3: { perShip: 352.34, save: 157.95, numberShipments: 3, planPrice: 1214.97 },
            prepay4: { perShip: 344.24, save: 242.99, numberShipments: 4, planPrice: 1619.96  },
          },
          prepay: {
            saveUpTo: 243.00,
          },
        },
      },
    },
    two: {
      numberWeeks: 2,
      days: {
        five: {
          
          shipments: {
            'auto-delivery': { perShip: 314.49, planPrice: 314.49 },
            bogo: { perShip: 289.33, save: 50.32, numberShipments: 2, planPrice: 628.98 },
            prepay3: { perShip: 273.61, save: 122.65, numberShipments: 3, planPrice: 943.47 },
            prepay4: { perShip: 267.32, save: 188.69, numberShipments: 4, planPrice: 1257.96 },
          },
          prepay: {
            saveUpTo: 189.00,
          },
        },
        seven: {
          
          shipments: {
            'auto-delivery': { perShip: 361.24, planPrice: 361.24 },
            bogo: { perShip: 332.34, save: 57.80, numberShipments: 2, planPrice: 722.48 },
            prepay3: { perShip: 314.28, save: 140.88, numberShipments: 3, planPrice: 1083.72 },
            prepay4: { perShip: 307.06, save: 216.74, numberShipments: 4, planPrice: 1444.96 },
          },
          prepay: {
            saveUpTo: 217.00,
          },
        },
      },
    },
  },
}

export function getPricingForPeople(people = 'one') {
  return getPricing(people, '5day', 'auto-delivery')
}

export function getPricing(people = 'one', days = '5day', ship = 'auto-delivery') {
  const person = PRICING.people[people] || PRICING.people.one
  const dayKey = days && String(days).includes('7') ? 'seven' : 'five'
  const day = person.days && person.days[dayKey] ? person.days[dayKey] : null

  const basePlan = day ? day.planPrice : (person.planPrice || null)
  const baseNumberWeeks = person.numberWeeks

  const shipments = day && day.shipments ? day.shipments : {}
  const shipKey = ship || 'auto-delivery'
  const shipInfo = shipments[shipKey] || shipments['auto-delivery'] || { perShip: basePlan }

  const resolvedPlanPrice = shipInfo.planPrice ?? basePlan ?? shipInfo.perShip ?? null

  const saveUpTo = day && day.prepay && typeof day.prepay.saveUpTo === 'number' ? day.prepay.saveUpTo : 0

  return {
    planPrice: resolvedPlanPrice,
    pricePerShipment: shipInfo.perShip ?? resolvedPlanPrice,
    autoDeliveryPerShip: (shipments['auto-delivery'] && shipments['auto-delivery'].perShip) || resolvedPlanPrice,
    numberWeeks: baseNumberWeeks,

    prepay: {
      numberShipments: shipInfo.numberShipments || (shipKey === 'auto-delivery' ? 1 : null),
      save: shipInfo.save || 0,
      perShip: shipInfo.perShip || resolvedPlanPrice,
      saveUpTo,
    },
  }
}

export function getPrepay(people = 'one', days = '5day') {

  if (arguments.length === 0) {
    let max = 0
    Object.values(PRICING.people || {}).forEach((person) => {
      if (!person.days) return
      Object.values(person.days).forEach((day) => {
        if (day.prepay && typeof day.prepay.saveUpTo === 'number') {
          max = Math.max(max, day.prepay.saveUpTo)
        }
      })
    })
    return { saveUpTo: max }
  }

  const person = PRICING.people[people] || PRICING.people.one
  const dayKey = days && String(days).includes('7') ? 'seven' : 'five'
  const day = person.days && person.days[dayKey] ? person.days[dayKey] : null

  const saveUpTo = day && day.prepay && typeof day.prepay.saveUpTo === 'number' ? day.prepay.saveUpTo : 0
  return { saveUpTo }
}
