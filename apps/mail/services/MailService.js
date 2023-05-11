import { asyncStorage } from '../../../services/AsyncStorageService.js'
import { storageService } from '../../../services/StorageService.js'

export const MailService = {
  getEmails,
  getEmail,
  removeEmail,
  createEmail,
  saveEmail,
  updateEmail,
  getDefaultFilter,
}

const logginUser = { email: 'tomerinbar1@gmail.com', fullName: 'Tomer Inbar' }

const MAIL_KEY = 'mailsDB'

const gMails = [
  {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'momo@momo.com',
    to: ['user1@appsus.com', 'user2@appsus.com'],
  },
  {
    id: 'e102',
    subject: 'Reminder: team meeting at 2pm',
    body: "Don't forget, we have a team meeting scheduled for 2pm today. See you there!",
    isRead: true,
    sentAt: 1652223600000,
    removedAt: null,
    from: 'jane@acme.com',
    to: ['tomerinbar1@gmail.com'],
  },
  {
    id: 'e103',
    subject: 'Important update: new product release',
    body: 'We are excited to announce the release of our new product. Check it out on our website!',
    isRead: false,
    sentAt: 1652200800000,
    removedAt: null,
    from: 'marketing@company.com',
    to: ['tomerinbar1@gmail.com'],
  },
  {
    id: 'e104',
    subject: 'Dinner invitation',
    body: 'We would like to invite you to a dinner party next week. Please let us know if you can make it.',
    isRead: true,
    sentAt: 1652167200000,
    removedAt: null,
    from: 'joe@example.com',
    to: ['tomerinbar1@gmail.com', 'user1@appsus.com'],
  },
  {
    id: 'e105',
    subject: 'Regarding your recent order',
    body: 'We noticed that you ordered the wrong size for your item. Please contact us if you would like to exchange it.',
    isRead: false,
    sentAt: 1652148000000,
    removedAt: null,
    from: 'support@company.com',
    to: ['tomerinbar1@gmail.com', 'user2@appsus.com'],
  },
  {
    id: 'e106',
    subject: 'Happy birthday!',
    body: 'Wishing you a happy birthday and a great year ahead.',
    isRead: false,
    sentAt: 1652054400000,
    removedAt: null,
    from: 'jenny@example.com',
    to: ['tomerinbar1@gmail.com', 'user3@appsus.com'],
  },
]

_createEmails()

async function getEmails(filterBy) {
  return asyncStorage.query(MAIL_KEY).then(mails => {
    return mails.filter(mail => {
      const { txt, isRead } = filterBy
      const isSubjectMatch = mail.subject
        .toLowerCase()
        .startsWith(txt.toLowerCase())
      return isSubjectMatch
    })
  })
}

async function getEmail(mailId) {
  return asyncStorage.get(MAIL_KEY, mailId)
}

async function removeEmail(mailId) {
  return asyncStorage.remove(MAIL_KEY, mailId)
}

async function saveEmail(email) {
  return asyncStorage.post(MAIL_KEY, email)
}

async function updateEmail(email) {
  return asyncStorage.put(MAIL_KEY, email)
}

function createEmail() {
  return {
    subject: '',
    body: '',
    isRead: false,
    sentAt: Date.now(),
    removedAt: null,
    from: logginUser,
    to: [{}],
  }
}

function _createEmails() {
  let mails = storageService.loadFromStorage(MAIL_KEY) || []
  if (!mails || !mails.length) {
    mails = gMails
    storageService.saveToStorage(MAIL_KEY, mails)
  }
}

function getDefaultFilter() {
  return { subject: '', isRead: null }
}
