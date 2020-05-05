# Emails Input

Zero dependencies emails input component.

## Props

EmailsInput comprises the following props:

| Props | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `originalNode` | `Element` | yes | N/A | An `Element` with an `id` comprising the component container. |
| `baseClass` | `string` | no | `emails-input` | CSS class used to define rules applied to the component. |
| `placeholder` | `string` | no | `add more people...` | Text used as a placeholder by the component input field. |

## APIs

| Method | Signature | Description |
| --- | --- | --- |
| `addEmail` | `(email: string) => void` | Add an email to the list |
| `getEmails` | `() => Email[]` | Add an email to the list |
| `getValidEmailsCount` | `() => number` | Add an email to the list |
| `setEmails` | `(emails: string[]) => void ` | Set all emails in the list. This operation *overwrites* completely the list. |

## Tech stack

This projects has been developed using:

- Node.js
- NPM
- Typescript
- Webpack
