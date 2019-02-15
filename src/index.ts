export const findAllComponentsByTrace = (name: string, parent: Element | Document = window.document) => parent.querySelectorAll(`[data-component-trace~="${name}"]`);

export const findTopComponentsByTrace = (name: string, parent: Element | Document = window.document) => {
  const elements = findAllComponentsByTrace(name, parent);
  const topElements = [];

  for (const element of (elements as unknown as Element[])) {
    let isTop = true;
    for (const top of topElements) {
      if (top.contains(element)) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topElements.push(element);
    }
  }
  return topElements;
};
