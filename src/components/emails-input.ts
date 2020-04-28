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
  const inputContainerNode = document.querySelector(`#${originalNode.id} .${baseClass}-container`);

  inputContainerNode.innerHTML = `
    <div class="${baseClass}-box">
      <div class="${baseClass}-list"></div>
      <input class="${baseClass}" type="email" name="email" placeholder="${placeholder}"></input>
    </div>
  `;

  const inputNode = document.querySelector(`#${originalNode.id} [name="email"]`);
  const emailsNode = document.querySelector(`#${originalNode.id} .${baseClass}-list`);

  const addEmail = (e: KeyboardEvent | FocusEvent) => {
    const inputElement = (<HTMLInputElement>e.target);
    const inputValue = inputElement.value.replace(',', '');

    if (inputValue && inputValue.length > 0) {
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

        emailblockNode.parentNode.removeChild(emailblockNode);
      });

      inputElement.value = '';
    }
  };

  inputNode.addEventListener('keyup', (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === 'Enter' || e.key === ',') {
      addEmail(e);
    }
  });

  inputNode.addEventListener('blur', (e: FocusEvent) => {
    addEmail(e);
  });
};