export default {
  title: "Player Position",
  name: "playerPosition",
  type: "document",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Position Reference",
      name: "position_ref",
      type: "reference",
      to: [{ type: "position" }],
    },
    {
      title: "Rating",
      name: "rating",
      type: "string",
      description: "Skill in position",
      options: {
        list: [
          { title: "Unconvincing", value: "1" },
          { title: "Competent", value: "2" },
          { title: "Accomplished", value: "3" },
          { title: "Good", value: "4" },
          { title: "Great", value: "5" },
        ],
      },
    },
  ],
};
