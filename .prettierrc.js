module.exports = {
    ...require("@bkkr/prettier-config"),
    overrides: [
      {
        files: "*.md",
        options: {
          "parser": "mdx"
        }
      }
    ]
  };