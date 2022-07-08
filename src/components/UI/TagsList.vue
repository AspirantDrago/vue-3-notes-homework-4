<template>
  <div class="tags-list">
    <div
      v-for="item in items"
      :key="item"
      class="tag-item"
      @click="this.$emit('onItemClick', item)"
      :class="{ isPreview: isPreview, isActive: (activeTags && activeTags.indexOf(item) !== -1) && !isPreview }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    activeTags () {
      return this.$store.getters.getNewNote.tags;
    }
  },
};
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
