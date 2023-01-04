<template>
  <div>
    <div class="sortSearch">
      <MySelect v-model="selectedSort" :options="sortOptions"/>
      <input
          v-model="searchValue"
      />
    </div>
    <PostsList
        :posts="filteredValues"
        v-if="!isLoading"
    />
    <div v-else>Loading...</div>
    <div class="page-container">
      <div
          class="page-num"
          :class="{'selected-page': page === pageNum}"
          v-for="pageNum in totalPage"
          :key="pageNum"
          @click="changePage(pageNum)"
      >
        {{pageNum}}
      </div>
    </div>  </div>
</template>

<script>
import PostsList from "@/components/PostsList";
import axios from 'axios';
import MySelect from "@/components/MySelect";
export default {
  components: {MySelect, PostsList},
  data() {
    return {
      posts: [],
      isLoading: false,
      selectedSort: '',
      searchValue: '',
      sortOptions: [
        {value: 'title', name: 'sort by title'},
        {value: 'body', name: 'sort by body'},
      ],
      page: 1,
      limit: 10,
      totalPage: 0
    }
  },
  methods: {
    async fetchPosts() {
      try{
        this.isLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        console.log('Error >>', e)
      } finally {
        this.isLoading = false;
      }
    },
    changePage(pageNum) {
      this.page = pageNum;
      this.fetchPosts();
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    filteredValues() {
      return this.sortedPosts.filter(post =>
          post.title.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  },
}
</script>

<style lang="scss">

.sortSearch {
  display: flex;
  flex-direction: column;

  input, select {
    align-self: flex-start;
    margin-top: 10px;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
}

.page-container {
  display: flex;
  margin-top: 20px;
}

.page-num {
  border: 1px solid black;
  padding: 8px;
  margin-right: 5px;
  border-radius: 4px;
  cursor: pointer;
}

.selected-page {
  border: 3px solid #4f92b1;
}

</style>
