import { createStore } from 'vuex';
import { setItem, getItem } from '@/utils/localStorageUtils';
import defaultNotes from '@/seeders/notes';

export const store = createStore({
  state: {
    notes: null,
    newNote: {
      title: '',
      tags: [],
    },
  },
  mutations: {
    setNotes (state, notes) {
      state.notes = notes;
      setItem('notes', notes);
    },
    setNewNoteText (state, text) {
      state.newNote.title = text;
    },
    setNewNoteTags (state, tags ) {
      state.newNote.tags = tags;
    },
    clearNewNote (state) {
      state.newNote = {
        title: '',
        tags: [],
      }
    }
  },
  actions: {
    initializeStore (context) {
      const notesFromLocalStorage = getItem('notes');
      if (notesFromLocalStorage) {
        context.commit('setNotes', notesFromLocalStorage);
      } else {
        context.commit('setNotes', defaultNotes);
      }
    },
    setNotes (context, notes) {
      console.log(notes);
      context.commit('setNotes', notes);
    },
    setNewNoteText (context, text) {
      context.commit('setNewNoteText', text);
    },
    clearNewNote (context) {
      context.commit('clearNewNote');
    },
    addNote (context) {
      context.commit('setNotes', [...context.state.notes, context.state.newNote]);
      context.dispatch('clearNewNote');
    },
    removeNoteByIndex (context, index) {
      context.state.notes.splice(index, 1)
      context.commit('setNotes', context.state.notes);
    },
    toggleNewNoteTag (context, tag) {
      if (context.state.newNote.tags.indexOf(tag) === -1) {
        context.commit('setNewNoteTags', context.state.newNote.tags.concat(tag));
      } else {
        context.commit('setNewNoteTags', context.state.newNote.tags.filter(function(val) { return val !== tag }));
      }
    }
  },
  getters: {
    getNotes(state) {
      if (!state.notes) {
        return [];
      }
      return state.notes;
    },
    getNewNote(state) {
      return state.newNote;
    },
  }
})
