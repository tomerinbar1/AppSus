import { asyncStorage } from '../../../services/AsyncStorageService.js'
import { storageService } from '../../../services/StorageService.js'

export const mailService = {
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
    subject:
      'Notification: התייצבות בלשכת התעסוקה @ Thu 11 May 2023 08:30 - 12:30 (IDT)',
    body: '',
    img: 'assets/img/Gmail/email-body1.png',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'Google Calendar',
    to: ['tomerinbar1@gmail.com', 'user1@appsus.com', 'user2@appsus.com'],
    isStar: false,
    isDraft: false,
  },
  {
    id: 'e102',
    subject:
      'How to Prevent iPad Overheat This Summer + the Top Aviation Apps for Student Pilots',
    body: '',
    img: 'assets/img/Gmail/email-body2.png',
    isRead: true,
    sentAt: 1652223600000,
    removedAt: null,
    from: 'iPad Pilot News',
    to: ['tomerinbar1@gmail.com'],
    isStar: true,
    isDraft: false,
  },
  {
    id: 'e103',
    subject: 'הודעה על משלוח שמספרו RS070889736NL',
    body: '',
    img: 'assets/img/Gmail/email-body3.png',
    isRead: false,
    sentAt: 1652200800000,
    removedAt: null,
    from: 'Israel Post',
    to: ['tomerinbar1@gmail.com'],
    isStar: true,
    isDraft: false,
  },
  {
    id: 'e104',
    subject: 'GitHub Copilot: Rediscover the joy of coding',
    body: '',
    img: 'assets/img/Gmail/email-body4.png',
    isRead: true,
    sentAt: 1652167200000,
    removedAt: null,
    from: 'GitHub',
    to: ['tomerinbar1@gmail.com', 'user1@appsus.com'],
    isStar: false,
    isDraft: false,
  },
  {
    id: 'e105',
    subject: ' מגידו תעופה בע״מ - Cancellation Notification',
    body: '',
    img: 'assets/img/Gmail/email-body5.png',
    isRead: false,
    sentAt: 1652148000000,
    removedAt: null,
    from: 'Flight Circle',
    to: ['tomerinbar1@gmail.com', 'user2@appsus.com'],
    isStar: true,
    isDraft: false,
  },
  {
    id: 'e106',
    subject:
      '[tomerinbar1/AppSus] Run failed: pages build and deployment - main (c5f645e)',
    body: '',
    img: 'assets/img/Gmail/email-body6.png',
    isRead: false,
    sentAt: 1652054400000,
    removedAt: 1652056210000,
    from: logginUser.email,
    to: ['tomerinbar1@gmail.com', 'user3@appsus.com'],
    isStar: false,
    isDraft: false,
  },
  {
    id: 'e107',
    subject: "We've updated our Terms and Privacy Policy",
    body: '',
    img: 'assets/img/Gmail/email-body7.png',
    isRead: false,
    sentAt: 1652054400000,
    removedAt: 1652056210000,
    from: 'Skillshare',
    to: ['user3@appsus.com'],
    isStar: true,
    isDraft: true,
  },
  {
    id: 'e108',
    subject: 'Security alert',
    body: '',
    img: 'assets/img/Gmail/email-body8.png',
    isRead: false,
    sentAt: 1652054400000,
    removedAt: 1652056210000,
    from: 'Google',
    to: ['user8@appsus.com'],
    isStar: false,
    isDraft: true,
  },
]

_createEmails()

function _filterEmails(filterBy, txt, mails) {
  return mails.filter(mail => {
    const { txt, isRead, status } = filterBy

    if (isRead === 'read' && !mail.isRead) {
      return false
    } else if (isRead === 'unread' && mail.isRead) {
      return false
    }

    if (status === 'starred' && !mail.isStar) {
      return false
    }
    if (status === 'draft' && !mail.isDraft) {
      return false
    }
    if (status === 'sent' && mail.from === logginUser.email) {
      return false
    }
    if (status === 'bin' && !mail.removedAt) {
      return false
    }

    if (txt) {
      const isSubjectMatch = mail.subject
        .toLowerCase()
        .includes(txt.toLowerCase())
      return isSubjectMatch
    }
    return true
  })
}

async function getEmails(filterBy, txt) {
  return asyncStorage
    .query(MAIL_KEY)
    .then(mails => _filterEmails(filterBy, txt, mails))
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
    isRead: true,
    sentAt: Date.now(),
    removedAt: null,
    from: logginUser.fullName,
    to: [],
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
  return { isStar: null, isRead: null, txt: '' }
}
