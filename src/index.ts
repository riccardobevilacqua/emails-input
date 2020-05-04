import { EmailsForm } from './components/emails-form';
import './styles/styles.scss';

EmailsForm({ originalNode: document.querySelector('#example01') });

const emailsForm2 = EmailsForm({ originalNode: document.querySelector('#example02') });
emailsForm2.setEmails([
  'ivan@mail.ru',
  'diego@mail.es',
  'thomas@mail.de'
]);
const replaceEmailsInput = document.querySelector('#example02Input');
const replaceEmailsButton = document.querySelector('#example02Button');
replaceEmailsButton.addEventListener('click', () => {
  const inputElement = (<HTMLInputElement>replaceEmailsInput);
  const emails = inputElement.value.replace(/\s/g, '').split(',');
  emailsForm2.setEmails(emails);
  inputElement.value = '';
});

EmailsForm({ originalNode: document.querySelector('#example03') });
