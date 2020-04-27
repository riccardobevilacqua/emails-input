export interface EmailsInputProps {
  title?: string;
  baseClass?: string;
}

export const EmailsInput = (
  inputContainerNode: Element,
  {
    title = 'Share <strong>Board name</strong> with others',
    baseClass = 'emails-input'
  }: EmailsInputProps
): void => {
  inputContainerNode.innerHTML = `
    <div class="${baseClass}">
      <div class="${baseClass}-content">
        <div class="${baseClass}-title">${title}</div>
      </div>
      <div class="${baseClass}-controls">
        <button class="${baseClass}-button">Add email</button>
        <button class="${baseClass}-button">Get emails count</button>
      </div>
    </div>
  `;
};