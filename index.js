import marko from "marko";
(async () => {
  // marko.load("./components/foo.marko");
  const template = marko.load("./test.marko");
  const rendered = await template.render();
  console.log(rendered.getOutput());
})();
