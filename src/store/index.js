import Vue from 'vue'
export default {
  addFeatureType(featureType) {
    let id = featureType.id
    Vue.set(this.state.featureTypes, id, featureType)
    this.set('featureTypes', this.state.featureTypes)
  },
  addItem(item) {
    this.state.items.push(item)
    this.set('items', this.state.items)
  },
  initFromLocalStorage() {
    this.state.items = this.get('items', [])

    this.state.featureTypes = this.get('featureTypes', {})
  },
  get(id, defaultValue) {
    let value = localStorage.getItem(id)
    if (value !== null) {
      return JSON.parse(value)
    }
    return defaultValue
  },
  set(id, object) {
    localStorage.setItem(id, JSON.stringify(object))
  },
  remove(id) {
    localStorage.removeItem(id)
  },
  dumpState() {
    return (JSON.stringify(this.state, null, 2))
  },
  state: {
    items: [{
      id: "1",
      label: "SSD Crucial BX300 120 Go (2,5 pouces / 7mm)",
      brand: "Crucial",
      url: "http://www.crucial.fr/fra/fr/latitude-e6510/CT10217487",
      price: {
        amount: 61.19,
        currency: {
          isoCode: 'EUR',
          unit: '€'
        }
      },
      features: {
        updateFor: "Dell Latitude E6510",
        driveSize: "2.5 inches",
        driveTechnology: "SSD",
        driveCapacity: "120 Gb",
        driveSerial: "CT10217487",
        driveSeries: "BX300"
      }
    },
    {
      id: "2",
      label: "SSD Crucial BX300 240 Go (2,5 pouces / 7mm)",
      brand: "Crucial",
      url: "http://www.crucial.fr/fra/fr/latitude-e6510/CT10134829",
      price: "89.99 €",
      features: {
        updateFor: "Dell Latitude E6510",
        driveSize: "2.5 inches",
        driveTechnology: "SSD",
        driveCapacity: "240 Gb",
        driveSerial: "CT10134829",
        driveSeries: "BX300"
      }
    }],
    featureTypes: {}
  }
}
