<template>
  <div>
    <NotesForm @onSubmit="handleSubmit" v-model="newNoteText" />
    <NotesList :items="notes" @onRemove="handleRemove" />
  </div>
</template>

<script>
import NotesForm from '@/components/Notes/NotesForm';
import NotesList from '@/components/Notes/NotesList';

export default {
  components: {
    NotesForm,
    NotesList,
  },
  computed: {
    notes () {
      return this.$store.getters.getNotes;
    },
    newNoteText: {
      get () {
        return this.$store.state.newNote.title;
      },
      set (value) {
        this.$store.dispatch('setNewNoteText', value);
      }
    }
  },
  methods: {
    // * submit notes
    handleSubmit () {
      this.$store.dispatch('addNote');
    },
    // * remove note
    handleRemove (index) {
      this.$store.dispatch('removeNoteByIndex', index);
    }
  },
};
</script>
