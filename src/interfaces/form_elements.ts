export interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement,
    email: HTMLInputElement,
    message: HTMLTextAreaElement
}
export interface FormElement extends HTMLFormElement {
    elements: FormElements
}