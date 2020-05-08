import { EmailsInput, Email } from './emails-input';

describe('Emails Input', () => {
  let component: any;

  beforeAll(() => {
    const rootNode = document.createElement('div');
    rootNode.id = 'app';
    const emailsInputContainerNode = document.createElement('div');
    emailsInputContainerNode.className = 'emails-input-container';
    rootNode.appendChild(emailsInputContainerNode);
    document.body.appendChild(rootNode);
  
    component = EmailsInput({ originalNode: document.querySelector('#app')});
  })

  test('should be defined', () => {
    expect(component).toBeDefined();
  });

  test('should set and get emails', () => {
    const emails = [
      'max@mail.ru',
      'ivan@mail.ru',
      'riccardo@mail.it'
    ];

    component.setEmails(emails);

    expect(component.getEmails().length).toBe(emails.length);

    emails.forEach((email, index) => {
      expect(component.getEmails()[index].value).toBe(email);
    })
  });

  test('should get valid emails count', () => {
    const emails = [
      'max@mail.ru',
      'ivan@mail.ru',
      'riccardo@mail.it',
      'invalid.email'
    ];

    component.setEmails(emails);

    expect(component.getValidEmailsCount()).toBe(3);
  });

  test('should subscribe and unsubscribe to emails update', () => {
    const emails = [
      'max@mail.ru',
      'ivan@mail.ru',
      'riccardo@mail.it'
    ];

    const subscriptionHandler = (e: CustomEvent) => {
      if (e && e.detail) {
        e.detail.forEach((email: Email, index: number) => {
          expect(email.value).toBe(emails[index]);
        });
      }
    };
    component.subscribe(subscriptionHandler);
    component.setEmails(emails);
    component.unsubscribe(subscriptionHandler);
  });
});
