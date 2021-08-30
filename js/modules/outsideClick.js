export default function clickOut(element, events, callback) {
  const outside = 'data-outside';
  const html = document.documentElement;

  function handleOut(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.addEventListener(userEvent, handleOut);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => { html.addEventListener(userEvent, handleOut); });
    });
    element.setAttribute(outside, '');
  }
}
