import { asyncStorage } from "../../../services/AsyncStorageService.js"
import {storageService} from '../../../services/StorageService.js'

export const MailService = {
  query,
  get,
  remove,
  createEmail,
}

const loggedinUser = { email: 'tomerinbar1@gmail.com', fullName: 'Tomer Inbar' }

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
    to: 'user@appsus.com',
  },
  {
    id: 'e102',
    subject: 'Reminder: team meeting at 2pm',
    body: "Don't forget, we have a team meeting scheduled for 2pm today. See you there!",
    isRead: true,
    sentAt: 1652223600000,
    removedAt: null,
    from: 'jane@acme.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e103',
    subject: 'Important update: new product release',
    body: 'We are excited to announce the release of our new product. Check it out on our website!',
    isRead: false,
    sentAt: 1652200800000,
    removedAt: null,
    from: 'marketing@company.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e104',
    subject: 'Dinner invitation',
    body: 'We would like to invite you to a dinner party next week. Please let us know if you can make it.',
    isRead: true,
    sentAt: 1652167200000,
    removedAt: null,
    from: 'joe@example.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e105',
    subject: 'Regarding your recent order',
    body: 'We noticed that you ordered the wrong size for your item. Please contact us if you would like to exchange it.',
    isRead: false,
    sentAt: 1652148000000,
    removedAt: null,
    from: 'support@company.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e106',
    subject: 'Happy birthday!',
    body: 'Wishing you a happy birthday and a great year ahead.',
    isRead: false,
    sentAt: 1652054400000,
    removedAt: null,
    from: 'jenny@example.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e107',
    subject: 'Regarding your job application',
    body: 'Thank you for submitting your application. We would like to schedule an interview with you next week.',
    isRead: false,
    sentAt: 1651960800000,
    removedAt: null,
    from: 'hr@company.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e108',
    subject: 'Invitation to participate in survey',
    body: 'We value your opinion and would appreciate if you could complete a short survey about our product.',
    isRead: true,
    sentAt: 1651910400000,
    removedAt: null,
    from: 'survey@company.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e109',
    subject: 'Congratulations!',
    body: 'You have been selected as the winner of our giveaway. Please respond with your contact information to claim your prize.',
    isRead: false,
    sentAt: 1651778400000,
    removedAt: null,
    from: 'giveaway@company.com',
    to: 'tomerinbar1@gmail.com',
  },
  {
    id: 'e110',
    subject: 'Reminder: doctor appointment tomorrow',
    body: "Just a friendly reminder that you have a doctor appointment tomorrow at 10am. Don't forget to bring your insurance card.",
    isRead: false,
    sentAt: 1651778400000,
    removedAt: null,
    from: 'doctor@clinic.com',
    to: 'tomerinbar1@gmail.com',
  },
]

_createEmails()

function query() {
  return asyncStorage.query(MAIL_KEY).then(mails => {
    return mails
  })
}

function get(mailId) {
  return asyncStorage.get(MAIL_KEY, mailId)
}

function remove(mailId) {
  return asyncStorage.remove(MAIL_KEY, mailId)
}

function createEmail() {
  return {
    id: '',
    subject: '',
    body: '',
    isRead: false,
    sentAt: Date.now(),
    removedAt: null,
    from: loggedinUser.email,
    to: '',
  }
}

function _createEmails() {
  let mails = storageService.loadFromStorage(MAIL_KEY) || []
  if (!mails || !mails.length) {
    mails = gMails
    storageService.saveToStorage(MAIL_KEY, mails)
  }
}