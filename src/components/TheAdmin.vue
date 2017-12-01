<template>
  <div >
    Admin
    <div><button >New item</button></div>
    <div><button>Add feature</button></div>
    <div><label>Feature</label>
      <select>
        <option></option>
        <option>Feature</option>
      </select>
    </div>
    <div>
      <label>Feature type</label>
      <label></label>
      <input type="checkbox" v-model="newFeatureTypeVisible"/>
      <template v-if="newFeatureTypeVisible">
        <label>code</label><input type="text" v-model="newFeatureType.code"/>
        <label>label</label><input type="text" v-model="newFeatureType.label"/>
        <button :click="createFeatureType">Create</button>
      </template>
      <template v-else>
        <label>type</label><select><option>String</option><option>Euro</option></select>
      </template>
      
      
    </div>
    <div>
      <label>value</label><input type="text"/>
    </div>
    <button v-on:click="dumpState">Log state</button>
    <button v-on:click="downloadSavedState">Save state</button>
    <a id="saveStateLink" download='state.json' :href="stateData" style="display:none"></a>
    <iframe id="saveStateFrame" style="display:none"></iframe>
  </div>
</template>
<!-- TODO : merge feature types -->
<!-- TODO : merge item types -->
<!-- TODO : merge introduce sud item type -->
<script>
import store from "../store";
import Vue from "vue";
export default {
  name: "the_admin",
  data() {
    return {
      items: this.$root.state.items,
      itemTypes: this.$root.state.itemTypes,
      featureTypes: this.$root.state.featureTypes,
      stateData: null,
      newFeatureTypeVisible: false,
      newFeatureType: {
        code: null,
        label: null
      },
      newItemTypeVisible: false,
      newItemType: {
        checked: false,
        code: null,
        label: null
      },
      newItemVisible: false,
      newItem: {
        id: null,
        itemTypeId: null,
        label: "",
        brand: "",
        url: null,
        price: {
          amount: null,
          currencyIsoCode: null
        },
        features: {}
      }
    };
  },
  methods: {
    resetNewFeatureType() {
      Vue.set(this.newFeatureType, {
        code: null,
        label: null
      });
      this.newFeatureTypeVisible = false;
    },
    resetNewItemType() {
      Vue.set(this.newItemType, {
        code: null,
        label: null
      });
      this.newItemTypeVisible = false;
    },
    createFeatureType() {},
    addFeatureType() {
      store.addFeatureType({ id: new Date().getTime() });
    },
    dumpState() {
      console.log(store.dumpState());
    },
    downloadSavedState() {
      const dumpedState = store.dumpState();
      this.stateData =
        "data:application/json;charset=utf-8," +
        encodeURIComponent(dumpedState);
      this.$nextTick(function() {
        document.getElementById("saveStateLink").click();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>