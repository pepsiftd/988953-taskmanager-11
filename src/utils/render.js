export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;

    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

export const replace = (newComponent, oldComponent) => {
  const container = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistElements = !!(container && newElement && oldElement);

  if (isExistElements) {
    container.replaceChild(newElement, oldElement);
  }
};
