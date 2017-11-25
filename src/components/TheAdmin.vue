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
  </div>
  </div>
</template>

<script>
export default {
  name: 'the_admin',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>