<template>
  <div>
  The comparator
    <table>
    <tbody>
    <tr><td  v-for="item of tableRows.rowHeader"  >
      <a :href="item.url">{{ item.label }}</a>
     {{item.price}}
      </td></tr>
    <tr v-for="rowFeature of tableRows.rowFeatures"> 
      <td v-for="featureCell of rowFeature">{{featureCell}}</td>          </tr>
    
    </tbody>
    </table>
  </div>
  
</template>

<script>
export default {
  name: "the_item_comparator",
  computed: {
    tableRows() {
      // Première ligne : nom du produit
      return {
        rowHeader: this.headerFromItems(this.items),
        rowFeatures: this.rowsFromItems(this.items)
      };
    }
  },
  methods: {
    headerFromItems(selectedItems) {
      let rowHeader = [{}];
      for (let item of selectedItems) {
        rowHeader.push({
          label: item.label,
          url: item.url,
          price: item.price
        });
      }
      return rowHeader;
    },
    rowsFromItems(selectedItems) {
      let rows = [];
      let featureSet = this.featureSet(selectedItems);
      for (let featureKey of featureSet) {
        rows.push(this.rowFromItem(selectedItems, featureKey));
      }
      console.log(rows);
      return rows;
    },
    rowFromItem(selectedItems, featureKey) {
      let row = [featureKey];
      for (const item of selectedItems) {
        if (Object.keys(item.features).includes(featureKey)) {
          row.push(item.features[featureKey]);
        } else {
          row.push({});
        }
      }
      return row;
    },
    featureSet(items) {
      let featureSet = new Set();
      for (let item of items) {
        for (let featureKey of Object.keys(item.features)) {
          featureSet.add(featureKey);
        }
      }
      return featureSet;
    }
  },
  data() {
    return {
      items: [
        {
          id: "1",
          label: "SSD Crucial BX300 120 Go (2,5 pouces / 7mm)",
          brand: "Crucial",
          url: "http://www.crucial.fr/fra/fr/latitude-e6510/CT10217487",
          price: "61.19 €",
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
        }
      ]
    };
  }
};
</script>

<style scoped></style>
