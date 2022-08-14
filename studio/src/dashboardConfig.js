export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62f955d6933841293a8aa36c",
                  title: "Sanity Studio",
                  name: "my-blog-studio-6npzjovz",
                  apiId: "9bef189c-5289-4199-ba3e-774a816540ef",
                },
                {
                  buildHookId: "62f955d693384129958aa3ce",
                  title: "Blog Website",
                  name: "my-blog-web-2kjw77oi",
                  apiId: "dbeb3d7b-ee39-40d3-bd48-a15155cac09f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/annie-qiu/my-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://my-blog-web-2kjw77oi.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
