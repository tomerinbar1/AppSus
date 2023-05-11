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
        type: 'NoteTxt',
        createdAt: 1652191340000,
        isPinned: true,
        info: { txt: 'Call mom for her birthday' },
        style: { backgroundColor: '#ffab91' },
    },
    {
        id: 'n004',
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
        id: 'n005',
        type: 'NoteImg',
        createdAt: 1652191360000,
        isPinned: true,
        info: { url: 'https://picsum.photos/300', title: 'Another random image' },
        style: { backgroundColor: '#d7ccc8' },
    },
    {
        id: 'n006',
        type: 'NoteTxt',
        createdAt: 1652191370000,
        isPinned: false,
        info: { txt: 'Finish reading "Atomic Habits"' },
        style: { backgroundColor: '#ffe082' },
    },
    {
        id: 'n007',
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
    {
        id: 'n008',
        type: 'NoteImg',
        createdAt: 1652191390000,
        isPinned: false,
        info: {
            url: 'https://picsum.photos/400',
            title: 'Yet another random image',
        },
        style: { backgroundColor: '#ffe0b2' },
    },
    {
        id: 'n009',
        type: 'NoteTxt',
        createdAt: 1652191400000,
        isPinned: true,
        info: { txt: 'Write blog post about React hooks' },
        style: { backgroundColor: '#ef9a9a' },
    },

    {
        id: 'n011',
        type: 'NoteTodos',
        createdAt: 1652191420000,
        isPinned: false,
        info: {
            title: 'Household chores',
            todos: [
                { txt: 'Do laundry', doneAt: 1652200000000 },
                { txt: 'Clean bathroom', doneAt: null },
                { txt: 'Vacuum living room', doneAt: null },
                { txt: 'Take out trash', doneAt: 1652210000000 },
            ],
        },
        style: { backgroundColor: '#c5cae9' },
    },
    {
        id: 'n012',
        type: 'NoteTxt',
        createdAt: 1652191430000,
        isPinned: true,
        info: { txt: 'Research new laptop models' },
        style: { backgroundColor: '#b3e5fc' },
    },
    {
        id: 'n013',
        type: 'NoteImg',
        createdAt: 1652191440000,
        isPinned: false,
        info: {
            url: 'https://picsum.photos/500',
            title: 'Yet another random image',
        },
        style: { backgroundColor: '#dcedc8' },
    },
    {
        id: 'n014',
        type: 'NoteTxt',
        createdAt: 1652191450000,
        isPinned: true,
        info: { txt: 'Practice piano for 30 minutes' },
        style: { backgroundColor: '#ffe0b2' },
    },
    {
        id: 'n015',
        type: 'NoteTodos',
        createdAt: 1652191460000,
        isPinned: false,
        info: {
            title: 'Gift ideas',
            todos: [
                { txt: 'Buy flowers for mom', doneAt: null },
                { txt: 'Get birthday present for friend', doneAt: null },
                { txt: 'Find anniversary gift for spouse', doneAt: null },
            ],
        },
        style: { backgroundColor: '#f0f4c3' },
    },
]

createNotes()

export const noteService = {
    getNotes,
    getNote,
    removeNote,
    saveNote,
    createNote,
    getEmptyNote,
}

function getEmptyNote(txt = '') {
    return {
        txt,
        type: 'NoteTxt'
    }
}

function createNote() {
    return {
        title :'New note',
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: true,
        style: { backgroundColor: '#00d' },
        info: { txt: 'Fullstack Me Baby!' }
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
