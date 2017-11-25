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
  data () {
    return {
      items: [
        {
          id: '1',
          label: '',
          brand: 'Crucial',
          href: 'http://www.crucial.fr/fra/fr/latitude-e6510/CT10217487',
          features: [
            {updateFor: 'Dell Latitude E6510'},
            {driveSize: '2.5 inches'},
            {driveTechnology: 'SSD'},
            {driveCapacity: '120 Gb'},
            {driveSerial: 'CT10217487'},
            {driveSeries: 'BX300'},
            {price: '61.19 €'}
          ]
        },
        {
          id: '2',
          label: '',
          brand: 'Crucial',
          href: 'http://www.crucial.fr/fra/fr/latitude-e6510/CT10134829',
          features: [
            {updateFor: 'Dell Latitude E6510'},
            {driveSize: '2.5 inches'},
            {driveTechnology: 'SSD'},
            {driveCapacity: '240 Gb'},
            {driveSerial: 'CT10134829'},
            {driveSeries: 'BX300'},
            {price: '89.99 €'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped></style>
