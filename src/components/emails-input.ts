export interface EmailsInputProps {
  originalNode: Element;
  baseClass?: string;
  placeholder?: string;
}

export const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const EmailsInput = (
  {
    originalNode,
    baseClass = 'emails-input',
    placeholder = 'add more people...'
  }: EmailsInputProps
) => {
  const inputContainerNode = document.querySelector(`#${originalNode.id} .emails-input-container`);

  inputContainerNode.innerHTML = `
    <div class="${baseClass}-box">
      <div class="${baseClass}-list"></div>
      <input class="${baseClass}" type="email" name="email" placeholder="${placeholder}"></input>
    </div>
  `;

  const inputNode = document.querySelector(`#${originalNode.id} [name="email"]`);
  const emailsNode = document.querySelector(`#${originalNode.id} .${baseClass}-list`);

  inputNode.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const inputElement = (<HTMLInputElement>e.target);
      const uniqueId = generateId();

      emailsNode.innerHTML += `
        <div class="email-block" data-key="${uniqueId}">
          <div class="email-block-text">${inputElement.value} <span class="email-block-icon">&#10005;</span></div>
        </div>
      `;

      const iconNode = document.querySelector(`#${originalNode.id} .${baseClass}-list .email-block:last-child .email-block-icon`);

      iconNode.addEventListener('click', e => {
        e.preventDefault();
        const emailblockNode = document.querySelector(`#${originalNode.id} [data-key="${uniqueId}"]`);
        emailblockNode.remove();
      });

      inputElement.value = '';
    }
  });
};