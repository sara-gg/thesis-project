export function inputRegister({ name, value }: { [name: string]: string }) {
  return {
    type: "INPUT_REGISTER",
    payload: { name, value },
  };
}
