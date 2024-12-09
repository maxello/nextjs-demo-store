// It's just an example of temporary data storage, use the backend to save the real data!
// export const cartMiddleware = ({getState}: any) => (next: any) => (action: any) => {
//   const name = 'cart';
//   const result = next(action);
//   if (result.type.match(name + '/')) {
//     if (!result.type.match('setModalVisibility')) {
//       localStorage.setItem(name, JSON.stringify(getState()[name].items));
//     }
//   }
//   return result;
// };
