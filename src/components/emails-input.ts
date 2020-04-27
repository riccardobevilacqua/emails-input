export interface EmailsInputProps {
  originalNode: Element;
  baseClass?: string;
  placeholder?: string;
}

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
      const inputValue = (<HTMLInputElement>e.target).value;
      emailsNode.innerHTML += `
        <span>${inputValue}</span>
      `;
      (<HTMLInputElement>e.target).value = '';
    }
  });
};