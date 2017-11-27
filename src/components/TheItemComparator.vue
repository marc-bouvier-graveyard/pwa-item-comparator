<template>
  <div>
  The comparator
    <table>
    <tbody>
    <tr>    <td>Item 1</td><td>Item 2</td>    </tr>
    <tr>    <td>10€</td><td>12€</td>          </tr>
    <tr>    <td>1kg</td><td>1.5kg</td>        </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'the_item_comparator',
  computed: {
    tableRows (selectedItems) {
      // Première ligne : nom du produit
      return {
        headerColumn: this.headerFromItems(selectedItems),
        itemColumns: []
      }
    }
  },
  methods: {
    headerFromItems (selectedItems) {
      let columns = ['']
      for (let item of selectedItems) {
        columns.push({
          label: item.label,
          href: item.href,
          price: item.price
        })
      }
    },
    rowsFromItems (selectedItems) {
      let rows = []
      let featureSet = this.featureSet()
      for (let featureKey of featureSet) {
        rows.push(this.rowFromItem(selectedItems, featureKey))
      }
      return rows
    },
    rowFromItem (selectedItems, featureKey) {
      // test
    },
    featureSet (items) {
      let featureSet = new Set()
      for (let item of items) {
        for (let featureKey of Object.keys(item.features)) {
          featureSet.add(featureKey)
        }
      }
      return featureSet
    }
  },
  data () {
    return {
      items: [
        {
          id: '1',
          label: '',
          brand: 'Crucial',
          href: 'http://www.crucial.fr/fra/fr/latitude-e6510/CT10217487',
          price: '61.19 €',
          features: [
            {updateFor: 'Dell Latitude E6510'},
            {driveSize: '2.5 inches'},
            {driveTechnology: 'SSD'},
            {driveCapacity: '120 Gb'},
            {driveSerial: 'CT10217487'},
            {driveSeries: 'BX300'}
          ]
        },
        {
          id: '2',
          label: '',
          brand: 'Crucial',
          href: 'http://www.crucial.fr/fra/fr/latitude-e6510/CT10134829',
          price: '89.99 €',
          features: [
            {updateFor: 'Dell Latitude E6510'},
            {driveSize: '2.5 inches'},
            {driveTechnology: 'SSD'},
            {driveCapacity: '240 Gb'},
            {driveSerial: 'CT10134829'},
            {driveSeries: 'BX300'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped></style>
