import { EmailsForm } from './components/emails-form';
import './styles/styles.scss';

// Example 01
EmailsForm({ originalNode: document.querySelector('#example01') });

// Example 02
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

// Example 03
const emailsForm3 = EmailsForm({ originalNode: document.querySelector('#example03') });
const subscriptionHandler = (e: CustomEvent) => {
  if (e && e.detail) {
    const subscriptionBox = document.querySelector('#example03SubscriptionBox');
    subscriptionBox.innerHTML = '';
    e.detail.forEach((item: any) => {
      const emailEntry = document.createElement('li');
      emailEntry.innerHTML = item.value;
      subscriptionBox.appendChild(emailEntry);
    });
  }
};
emailsForm3.subscribe(subscriptionHandler);
