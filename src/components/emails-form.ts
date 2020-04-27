import { EmailsInput } from './emails-input';

export interface EmailsFormProps {
  title?: string;
  baseClass?: string;
}

export const EmailsForm = (
  originalNode: Element,
  {
    title = 'Share <strong>Board name</strong> with others',
    baseClass = 'emails-form'
  }: EmailsFormProps
): void => {
  originalNode.innerHTML = `
    <div class="${baseClass}">
      <div class="${baseClass}-content">
        <div class="${baseClass}-title">${title}</div>
        <div class="emails-input-container"></div>
      </div>
      <div class="${baseClass}-controls">
        <button class="${baseClass}-button">Add email</button>
        <button class="${baseClass}-button">Get emails count</button>
      </div>
    </div>
  `;

  EmailsInput(originalNode, {});
};