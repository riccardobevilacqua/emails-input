export interface EmailsInputProps {
  originalNode: Element;
  baseClass?: string;
  placeholder?: string;
}

export const generateId = () => Math.random().toString(36).substring(2) + performance.now().toString(36);

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
    e.stopPropagation();
    if (e.code === 'Enter' || e.code === 'Comma') {
      const inputElement = (<HTMLInputElement>e.target);
      const inputValue = inputElement.value.replace(',', '');
      const uniqueId = generateId();

      const emailBlock = document.createElement('div');
      emailBlock.className = 'email-block';
      emailBlock.setAttribute('data-key', uniqueId);
      emailBlock.innerHTML = `
          <div class="email-block-text">${inputValue} <span class="email-block-icon">&#10005;</span></div>
      `;
      emailsNode.appendChild(emailBlock);

      const iconNode = document.querySelector(`#${originalNode.id} .${baseClass}-list .email-block[data-key="${uniqueId}"] .email-block-icon`);

      iconNode.addEventListener('click', () => {
        const emailblockNode = document.querySelector(`#${originalNode.id} .${baseClass}-list .email-block[data-key="${uniqueId}"]`);

        emailblockNode.remove();
      });

      inputElement.value = '';
    }
  });
};