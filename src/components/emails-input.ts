export interface EmailsInputProps {
  baseClass?: string;
  placeholder?: string;
}

export const EmailsInput = (
  originalNode: Element,
  {
    baseClass = 'emails-input',
    placeholder = 'add more people...'
  }: EmailsInputProps
) => {
  const inputContainerNode = document.querySelector(`#${originalNode.id} .emails-input-container`);

  inputContainerNode.innerHTML = `
    <div class="${baseClass}-box">
      <input class="${baseClass}" type="email" name="email" placeholder="${placeholder}"></input>
    </div>
  `;

  const inputNode = document.querySelector(`#${originalNode.id} [name="email"]`);

  inputNode.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const inputValue = (<HTMLInputElement>e.target).value;
    }
  });
};