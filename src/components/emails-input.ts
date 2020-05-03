export interface EmailsInputProps {
  originalNode: Element;
  baseClass?: string;
  placeholder?: string;
}

export interface Email {
  id: string;
  value: string;
  isValid: boolean;
}

export const generateId = () => Math.random().toString(36).substring(2) + performance.now().toString(36);

export const validateEmail = (input: string) => {
  if (!input) {
    return false;
  }

  const pattern = /[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}/gi;

  return pattern.test(input);
}

export const EmailsInput = (
  {
    originalNode,
    baseClass = 'emails-input',
    placeholder = 'add more people...'
  }: EmailsInputProps
) => {
  let emailsList: Email[] = [];
  const inputContainerNode = document.querySelector(`#${originalNode.id} .${baseClass}-container`);

  inputContainerNode.innerHTML = `
    <div class="${baseClass}-box">
      <div class="${baseClass}-list"></div>
      <input class="${baseClass}" type="email" name="email" placeholder="${placeholder}"></input>
    </div>
  `;

  const inputNode = document.querySelector(`#${originalNode.id} [name="email"]`);
  const emailsNode = document.querySelector(`#${originalNode.id} .${baseClass}-list`);

  const getValidEmailsCount = () => emailsList.filter(email => email.isValid).length;

  const addEmail = (email: string) => {
    if (email && email.length > 0) {
      const uniqueId = generateId();
      const isValid = validateEmail(email);
    
      emailsList.push({
        id: uniqueId,
        value: email,
        isValid
      });
    
      const emailBlock = document.createElement('div');
      emailBlock.className = `email-block ${isValid ? '' : 'is-invalid'}`;
      emailBlock.setAttribute('data-key', uniqueId);
      emailBlock.innerHTML = `
          <div class="email-block-text">${email} <span class="email-block-icon">&#10005;</span></div>
      `;
      emailsNode.appendChild(emailBlock);
    
      const iconNode = document.querySelector(`#${originalNode.id} .${baseClass}-list .email-block[data-key="${uniqueId}"] .email-block-icon`);
    
      iconNode.addEventListener('click', () => {
        const emailblockNode = document.querySelector(`#${originalNode.id} .${baseClass}-list .email-block[data-key="${uniqueId}"]`);
    
        emailblockNode.parentNode.removeChild(emailblockNode);
    
        const index = emailsList.findIndex(email => email.id === uniqueId);
    
        if (index > -1) {
          emailsList.splice(index, 1);
        }
      });
    }
  };

  const handleAddEmail = (e: KeyboardEvent | FocusEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e instanceof FocusEvent || (e instanceof KeyboardEvent && (e.key === 'Enter' || e.key === ','))) {
      const inputElement = (<HTMLInputElement>e.target);
      const inputValue = inputElement.value.replace(',', '');

      addEmail(inputValue);
      inputElement.value = '';
    } else if (e instanceof ClipboardEvent) {
      const pastedText = (e.clipboardData || (window as any).clipboardData).getData('text/plain');
      const emails = pastedText.replace(/\s/g, '').split(',');

      emails.forEach((email: string) => {
        if (email && email.length > 0) {
          addEmail(email);
        }
      });
    }
  };

  inputNode.addEventListener('keyup', handleAddEmail);

  inputNode.addEventListener('blur', handleAddEmail);

  inputNode.addEventListener('paste', handleAddEmail);

  return {
    getEmails: () => emailsList,
    getValidEmailsCount
  };
};
