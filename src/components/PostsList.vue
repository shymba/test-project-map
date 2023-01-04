<template>
  <div>
    <transition-group name="posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <div><strong>Post title: </strong>{{post.title}}</div>
        <div><strong>Post body: </strong>{{post.body}}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'PostsList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  padding: 15px;
  border: none;
  box-shadow: 0 2px 20px rgb(0 0 0 / 70%);
  border-radius: 10px;
  margin-top: 25px;
  background-color: #cad5d4;
  font-size: 16px;
}

.posts-move {
  transition: all 0.6s ease;
}

</style>
