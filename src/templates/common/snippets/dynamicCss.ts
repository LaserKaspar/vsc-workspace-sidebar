const BASE_PADDING = 20;
const INDENT_PADDING = 10;

export const dynamicCss = (maxDepth: number) => {
  return [...Array(maxDepth).keys()]
    .map((count) => {
      const depth = count + 1;

      return `
      .list__branch-list-item[data-depth='${depth}'] > .list__element {
        padding-left: ${depth * INDENT_PADDING + BASE_PADDING}px;
      }

    `;
    })
    .join('')
    .trim();
};
