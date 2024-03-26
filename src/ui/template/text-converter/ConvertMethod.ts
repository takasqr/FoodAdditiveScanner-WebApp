type ConvertMethod = {
  key: string,
  name: string,
  description: string,
  placeholderInput: string,
  placeholderResult: string,
  function: (inputText: string) => string
}