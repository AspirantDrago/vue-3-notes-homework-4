<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
        required
        v-model="model"
        placeholder="Type our note"
      />
      <TagsList @onItemClick="handleTagClick" :items="tags" />
      <button class="btn btnPrimary" type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList';

export default {
  components: {
    TagsList,
  },
  props: {
    modelValue: {
      type: String,
    },
  },
  data () {
    return {
      tags: [
        'home',
        'work',
        'travel',
      ],
    };
  },
  computed: {
    model: {
      get () {
        return this.modelValue;
      },
      set (value) {
        return this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    onSubmit () {
      this.$emit('onSubmit');
    },
    handleTagClick (tag) {
      this.$store.dispatch('toggleNewNoteTag', tag)
    },
  },
}
</script>

<style lang="scss" scoped>
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin-bottom: 0;
  }
}
</style>
