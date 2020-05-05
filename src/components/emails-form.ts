import { EmailsInput } from './emails-input';

export interface EmailsFormProps {
  originalNode: Element;
  title?: string;
  baseClass?: string;
}

export function EmailsForm(
  {
    originalNode,
    title = 'Share <strong>Board name</strong> with others',
    baseClass = 'emails-form'
  }: EmailsFormProps
) {
  originalNode.innerHTML = `
    <div class="${baseClass}">
      <div class="${baseClass}-content">
        <div class="${baseClass}-title">${title}</div>
        <div class="emails-input-container"></div>
      </div>
      <div class="${baseClass}-controls">
        <button class="${baseClass}-button ${baseClass}-button__add-email">Add email</button>
        <button class="${baseClass}-button ${baseClass}-button__emails-count">Get emails count</button>
      </div>
    </div>
  `;

  const generateRandomEmail = () => Math.random().toString(36).substring(2,11) + '@sample.com';

  const emailsInput = EmailsInput({ originalNode });

  const getEmailsCountButtonNode = document.querySelector(`#${originalNode.id} .${baseClass}-button__emails-count`);
  getEmailsCountButtonNode.addEventListener('click', () => {
    alert(`Detected ${emailsInput.getValidEmailsCount()} valid emails.`);
  });

  const addEmailButtonNode = document.querySelector(`#${originalNode.id} .${baseClass}-button__add-email`);
  addEmailButtonNode.addEventListener('click', () => emailsInput.addEmail(generateRandomEmail()));

  return {
    setEmails: emailsInput.setEmails,
    subscribe: emailsInput.subscribe,
    unsubscribe: emailsInput.unsubscribe
  }
};
