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
      <label>New feature type</label><input type="checkbox"/>
      <label>key</label><input type="text"/>
      <label>name</label><input type="text"/>
      <label>type</label><select><option>String</option><option>Euro</option></select>
    </div>
    <div>
      <label>value</label><input type="text"/>
    </div>
    <button v-on:click="dumpState">Log state</button>
    <button v-on:click="saveState">Save state</button>
    <a id="saveStateLink" download='state.json' :href="stateData" style="display:none"></a>
    <iframe id="saveStateFrame" style="display:none"></iframe>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "the_admin",
  data() {
    return {
      items: this.$root.state.items,
      featureTypes: this.$root.state.featureTypes,
      stateData: null
    };
  },
  methods: {
    addFeatureType() {
      store.addFeatureType({ id: new Date().getTime() });
    },
    dumpState() {
      console.log(store.dumpState());
    },
    saveState() {
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