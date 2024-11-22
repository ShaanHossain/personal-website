const template = (variables, { tpl }) => {

  const jsx = variables.jsx

  if (jsx.openingElement.name.name === "svg") {
    jsx.openingElement.attributes = jsx.openingElement.attributes.map((attr) => {
      if (attr.name.name === "fill") {
        return {
          ...attr,
          value: {
            type: "StringLiteral",
            value: "currentColor", // Replace the fill value with the desired hex
          },
        };
      }
      return attr;
    });
  }

  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${jsx}
);

${variables.exports};
`
}

module.exports = template