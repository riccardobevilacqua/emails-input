export interface EmailsInputProps {
  title?: string;
}

export const EmailsInput = (
  inputContainerNode: Element,
  {
    title = 'Share <strong>Board name</strong> with others'
  }: EmailsInputProps
): void => {
  inputContainerNode.innerHTML = `
    <div class="emails-input">
      <div class="emails-input-content">
        <div class="emails-input-title">${title}</div>
      </div>
      <div class="emails-input-controls">
      </div>
    </div>
  `;
};