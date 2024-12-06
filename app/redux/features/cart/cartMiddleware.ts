export const cartMiddleware = ({getState}: any) => (next: any) => (action: any): any => {
  const name = 'cart';
  const result = next(action);
  if (!result.type.match('setModalVisibility')) {
    localStorage.setItem(name, JSON.stringify(getState()[name].items));
  }
  return result;
};
