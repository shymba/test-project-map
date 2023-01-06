<template>
  <div class="modal">
    <div @click.stop class="modal-content">
      <input v-model="name" type="text" placeholder="Marker name"/>
      <button class="btn" @click="addMarkerName">Add</button>
      <p class="text"><strong>Lat: </strong> {{coordsInfo.lat}} <strong>Lng:</strong> {{coordsInfo.lng}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: ["coordsInfo"],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addMarkerName() {
      this.$emit('closeModal', this.name)
    },
  }
}
</script>

<style lang="scss">
.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;position: fixed;
  background: rgba(0,0,0,0.5);
  display: flex;
  z-index: 400;

  .modal-content {
    margin: auto;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .btn {
    font-size: 16px;
    padding: 5px 20px;
    color: #FFFFFF;
    background-color: #d7b8d2;
    border: 1px solid #947d92;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
  }

  input {
    font-size: 16px;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid #947d92;
    outline: none;
  }

  .text {
    margin-top: 10px;
  }
}

</style>