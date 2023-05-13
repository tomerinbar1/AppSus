// note service
import { storageService } from '../../../services/storageService.js'
import { asyncStorage } from '../../../services/asyncStorageService.js'
// import { utilService } from '../../../services/utilService.js'
const NOTE_KEY = 'noteDB'

const gNotes = [
  {
    id: 'n001',
    type: 'NoteTxt',
    createdAt: 1652191320000,
    isPinned: false,
    info: { txt: 'Buy groceries for the week' },
    style: { backgroundColor: '#f8bbd0' },
  },
  {
    id: 'n002',
    type: 'NoteImg',
    createdAt: 1652191330000,
    isPinned: false,
    info: { url: 'https://picsum.photos/200', title: 'Random image' },
    style: { backgroundColor: '#fff9c4' },
  },

  {
    id: 'n003',
    type: 'NoteTodos',
    createdAt: 1652191350000,
    isPinned: false,
    info: {
      title: 'Plan weekend trip',
      todos: [
        { txt: 'Book hotel', doneAt: null },
        { txt: 'Buy train tickets', doneAt: 1652200000000 },
        { txt: 'Pack bags', doneAt: null },
      ],
    },
    style: { backgroundColor: '#b2ebf2' },
  },
  {
    id: 'n004',
    type: 'NoteImg',
    createdAt: 1652191360000,
    isPinned: true,
    info: { url: 'https://picsum.photos/300', title: 'Another random image' },
    style: { backgroundColor: '#d7ccc8' },
  },
  {
    id: 'n005',
    type: 'NoteTxt',
    createdAt: 1652191370000,
    isPinned: false,
    info: { txt: 'Finish reading "Atomic Habits"' },
    style: { backgroundColor: '#ffe082' },
  },
  {
    id: 'n006',
    type: 'NoteTodos',
    createdAt: 1652191380000,
    isPinned: true,
    info: {
      title: 'Workout routine',
      todos: [
        { txt: 'Warm up', doneAt: 1652200000000 },
        { txt: 'Cardio', doneAt: null },
        { txt: 'Strength training', doneAt: null },
        { txt: 'Cool down', doneAt: null },
      ],
    },
    style: { backgroundColor: '#c8e6c9' },
  },
]

createNotes()

export const noteService = {
  getNotes,
  getNote,
  removeNote,
  saveNote,
  createNote,
}

function createNote() {
  return {
    title: 'Title',
    createdAt: Date.now(),
    type: 'Text',
    isPinned: true,
    style: { backgroundColor: 'white' },
    info: { txt: 'Fullstack Me Baby!' },
  }
}

async function getNotes() {
  return asyncStorage.query(NOTE_KEY).then(notes => {
    return notes
  })
}

async function getNote(noteId) {
  return asyncStorage.get(NOTE_KEY, noteId)
}
async function removeNote(noteId) {
  return asyncStorage.remove(NOTE_KEY, noteId)
}
async function saveNote(note) {
  if (note.id) {
    return asyncStorage.put(NOTE_KEY, note)
  } else {
    return asyncStorage.post(NOTE_KEY, note)
  }
}

function createNotes() {
  let notes = storageService.loadFromStorage(NOTE_KEY) || []
  if (!notes || !notes.length) {
    notes = gNotes
    storageService.saveToStorage(NOTE_KEY, notes)
  }
}
